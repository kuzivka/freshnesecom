import { Product } from '@common/type';
import { Box, Chip, Tab, Tabs, Typography } from '@mui/material';
import { greenChip } from '@styles/mixins';
import React, { SyntheticEvent, useState } from 'react';
import {
  descriptionText,
  descriptionTitles,
  reviewContainer,
  tabPanelWithGap,
  tabs,
  tabsContainer,
  tabTitle,
} from './InfoTabsStyle';

interface InfoTabsProps {
  product: Product;
}

export default function InfoTabs({
  product: { origins, recipe, reviews, question },
}: InfoTabsProps) {
  const [value, setValue] = useState(0);
  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={tabsContainer}>
      <Tabs
        variant="scrollable"
        sx={tabs}
        value={value}
        onChange={handleChange}
      >
        <Tab sx={tabTitle} label="Description" />
        <Tab
          sx={tabTitle}
          label="Review"
          icon={<Chip sx={greenChip} label={reviews.length} />}
          iconPosition="end"
        />
        <Tab
          sx={tabTitle}
          label="Questions"
          icon={<Chip sx={greenChip} label={question.length} />}
          iconPosition="end"
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Typography sx={descriptionTitles} variant="h5">
          Origins
        </Typography>
        <Typography sx={descriptionText} variant="body1">
          {origins}
        </Typography>
        <Typography sx={descriptionTitles} variant="h5">
          How to cook
        </Typography>
        <Typography sx={descriptionText} variant="body1">
          {recipe}
        </Typography>
      </TabPanel>
      <TabPanel styles={tabPanelWithGap} value={value} index={1}>
        {reviews.map((review) => (
          <Box key={review} sx={reviewContainer}>
            <Typography sx={descriptionText} variant="body1">
              {review}
            </Typography>
          </Box>
        ))}
      </TabPanel>
      <TabPanel styles={tabPanelWithGap} value={value} index={2}>
        {question.map((quest) => (
          <Box key={quest} sx={reviewContainer}>
            <Typography sx={descriptionText} variant="body1">
              {quest}
            </Typography>
          </Box>
        ))}
      </TabPanel>
    </Box>
  );
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  styles?: Object;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, styles } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
    >
      {value === index && <Box sx={{ p: 0, ...styles }}>{children}</Box>}
    </div>
  );
}
