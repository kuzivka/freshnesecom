import { Box } from '@mui/material';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  styles?: Object;
}

export function TabPanel(props: TabPanelProps) {
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
