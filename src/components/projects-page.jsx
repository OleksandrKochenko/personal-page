import { useState } from 'react';
import { MenuItem, Select } from '@mui/material';
import './pages.scss';
import { ProjectCard } from './elements/project-card';

const ProjectsPage = () => {
  const [projectsType, setProjectsType] = useState('pet');

  const handleChange = e => {
    setProjectsType(e.target.value);
  };

  return (
    <div className="page_wraper">
      <div>
        <Select
          variant="standard"
          sx={{
            minWidth: 180,
            color: '#fff',
            fontSize: 22,
            ':before': {
              borderBottomColor: '#fff',
              borderBottomWidth: '1px',
            },
            ':after': { borderBottomColor: '#000' },
          }}
          value={projectsType}
          onChange={handleChange}
        >
          <MenuItem value={'pet'}>Pet projects</MenuItem>
          <MenuItem value={'com'}>Commercial</MenuItem>
          <MenuItem value={'all'}>All</MenuItem>
        </Select>
      </div>
      <h2 style={{ color: 'chocolate' }}>Under construction</h2>
      <ProjectCard />
    </div>
  );
};

export default ProjectsPage;
