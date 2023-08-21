import PropTypes from 'prop-types';

import {
  Title,
  StatList,
  StatItem,
  Label,
  Percentage,
  StatisticsSection,
} from './Statistics.styled';

export const Statistics = ({ stats, title }) => {
  return (
    <StatisticsSection>
      {title && <Title>{title}</Title>}
      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatItem key={id}>
            <Label>{label}</Label>
            <Percentage>{percentage}</Percentage>
          </StatItem>
        ))}
      </StatList>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
