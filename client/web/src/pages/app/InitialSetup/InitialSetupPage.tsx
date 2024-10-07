import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAtom } from 'jotai';
import { supabase } from '../../../lib/supabase';
import { User } from '@supabase/supabase-js';
import {
  stepAtom,
  nameAtom,
  birthdateAtom,
  occupationAtom,
  isStudentAtom,
  interestsAtom,
  learningGoalAtom,
  learningStyleAtom,
  learningTimeAtom,
  deviceAtom,
  isSelectedAtom,
  progressAtom,
  isMinorAtom,
  privacyLevelAtom,
} from '../../../atoms/initialSetupAtom';
import { InitialSetupContainer, InitialSetupForm, ProgressBarContainer, ProgressBar, Progress, InitialSetupButton, BackButton } from './InitialSetup.styles';
import WelcomeStep from './components/WelcomeStep/WelcomeStep';
import NameStep from './components/NameStep/NameStep';
import BirthdateStep from './components/BirthdateStep/BirthdateStep';
import StudentOccupationStep from './components/OccupationStep/StudentOccupationStep';
import AdultOccupationStep from './components/OccupationStep/AdultOccupationStep';
import InterestStep from './components/InterestStep/InterestStep';
import LearningGoalStep from './components/LearningGoalStep/LearningGoalStep';
import LearningStyleStep from './components/LearningStyleStep/LearningStyleStep';
import LearningTimeStep from './components/LearningTimeStep/LearningTimeStep';
import DeviceStep from './components/DeviceStep/DeviceStep';
import ConfirmationStep from './components/ConfirmationStep/ConfirmationStep';
import { useUserProfile } from '../../../hooks/useUserProfile';

const InitialSetupPage: React.FC = () => {
  const [step, setStep] = useAtom(stepAtom);
  const [name, setName] = useAtom(nameAtom);
  const [birthdate, setBirthdate] = useAtom(birthdateAtom);
  const [occupation, setOccupation] = useAtom(occupationAtom);
  const [isStudent, setIsStudent] = useAtom(isStudentAtom);
  const [interests, setInterests] = useAtom(interestsAtom);
  const [learningGoal, setLearningGoal] = useAtom(learningGoalAtom);
  const [learningStyle, setLearningStyle] = useAtom(learningStyleAtom);
  const [learningTime, setLearningTime] = useAtom(learningTimeAtom);
  const [device, setDevice] = useAtom(deviceAtom);
  const [isSelected, setIsSelected] = useAtom(isSelectedAtom);
  const [progress, setProgress] = useAtom(progressAtom);
  const [isMinor, setIsMinor] = useAtom(isMinorAtom);
  const [privacyLevel, setPrivacyLevel] = useAtom(privacyLevelAtom);
  const [user, setUser] = useState<User | null>(null);

  const navigate = useNavigate();
  const { updateProfile } = useUserProfile();

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    };
    fetchUser();
  }, []);

  const googleName = user?.user_metadata?.full_name || null;

  useEffect(() => {
    if (birthdate) {
      const birthYear = new Date(birthdate).getFullYear();
      const currentYear = new Date().getFullYear();
      const age = currentYear - birthYear;
      setIsMinor(age <= 18);
    }
  }, [birthdate, setIsMinor]);

  useEffect(() => {
    setProgress((step / 10) * 100);
  }, [step, setProgress]);

  const handleNextStep = () => {
    if (step === 1 && !name) {
      return;
    }
    setStep(step + 1);
    setIsSelected(false);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
    setIsSelected(true);
  };

  const handleConfirm = async () => {
    if (user) {
      try {
        const { error } = await supabase
          .from('users')
          .update({
            name,
            birthdate,
            privacy_level: privacyLevel,
            occupation,
            is_student: isStudent,
            interests,
            learning_goal: learningGoal,
            learning_style: learningStyle,
            learning_time: learningTime,
            device,
          })
          .eq('id', user.id);

        if (error) throw error;

        updateProfile({
          interests,
          learningGoal,
          learningStyle,
          learningTime,
          device,
        });
        setProgress(100);
        setTimeout(() => {
          alert('初期設定が完了しました。');
          navigate('/webapp/job-selection');
        }, 500);
      } catch (error) {
        console.error('初期設定に失敗しました:', error);
        alert('初期設定に失敗しました。もう一度お試しください。');
      }
    }
  };

  return (
    <InitialSetupContainer>
      {step > 0 && (
        <ProgressBarContainer>
          {step > 1 && (
            <BackButton type="button" onClick={handlePreviousStep}>
              ←
            </BackButton>
          )}
          <ProgressBar>
            <Progress progress={progress} />
          </ProgressBar>
        </ProgressBarContainer>
      )}
      <InitialSetupForm onSubmit={(e: React.FormEvent) => e.preventDefault()}>
        {step === 0 && <WelcomeStep handleNextStep={handleNextStep} />}
        {step === 1 && <NameStep name={name} setName={setName} setIsSelected={setIsSelected} googleName={googleName} />}
        {step === 2 && <BirthdateStep birthdate={birthdate} setBirthdate={setBirthdate} setIsSelected={setIsSelected} privacyLevel={privacyLevel} setPrivacyLevel={setPrivacyLevel} name={name} />}
        {step === 3 && isMinor ? (
          <StudentOccupationStep birthdate={birthdate} isStudent={isStudent} setIsStudent={setIsStudent} setIsSelected={setIsSelected} />
        ) : step === 3 ? (
          <AdultOccupationStep birthdate={birthdate} occupation={occupation} setOccupation={setOccupation} setIsSelected={setIsSelected} />
        ) : null}
        {step === 4 && <InterestStep interests={interests} setInterests={setInterests} isSelected={isSelected} setIsSelected={setIsSelected} occupation={occupation} isStudent={isStudent} />}
        {step === 5 && <LearningGoalStep learningGoal={learningGoal} setLearningGoal={setLearningGoal} setIsSelected={setIsSelected} />}
        {step === 6 && <LearningStyleStep learningStyle={learningStyle} setLearningStyle={setLearningStyle} setIsSelected={setIsSelected} />}
        {step === 7 && <LearningTimeStep learningTime={learningTime} setLearningTime={setLearningTime} setIsSelected={setIsSelected} />}
        {step === 8 && <DeviceStep device={device} setDevice={setDevice} setIsSelected={setIsSelected} />}
        {step === 9 && (
          <ConfirmationStep
            name={name}
            birthdate={birthdate}
            privacyLevel={privacyLevel}
            occupation={occupation}
            interests={interests}
            learningGoal={learningGoal}
            learningStyle={learningStyle}
            learningTime={learningTime}
            device={device}
            onConfirm={handleConfirm}
          />
        )}
        {step < 9 && step > 0 && (
          <InitialSetupButton type="button" onClick={handleNextStep} disabled={!isSelected && step > 1}>
            次へ
          </InitialSetupButton>
        )}
      </InitialSetupForm>
    </InitialSetupContainer>
  );
};

export default InitialSetupPage;
