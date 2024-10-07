import React from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, Container } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { faqData } from './faqData';

const Faq: React.FC = () => {
  return (
    <Box sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Container maxWidth="md">
        <Typography variant="h3" component="h2" align="center" gutterBottom>
          よくある質問
        </Typography>
        {faqData.map((faq, index) => (
          <Accordion key={index}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`panel${index}a-content`} id={`panel${index}a-header`}>
              <Typography>{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  );
};

export default Faq;
