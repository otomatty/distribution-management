import { useState } from 'react';
import { supabase } from '../lib/supabase';

interface ProfileUpdateData {
  interests?: string[];
  learningGoal?: string;
  learningStyle?: string;
  learningTime?: string;
  device?: string;
}

export const useUserProfile = () => {
  const [isUpdating, setIsUpdating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const updateProfile = async (data: ProfileUpdateData) => {
    setIsUpdating(true);
    setError(null);

    try {
      const { data: user, error: userError } = await supabase.auth.getUser();

      if (userError) throw userError;

      const { error: updateError } = await supabase.from('users').update(data).eq('id', user.user.id);

      if (updateError) throw updateError;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setIsUpdating(false);
    }
  };

  return { updateProfile, isUpdating, error };
};
