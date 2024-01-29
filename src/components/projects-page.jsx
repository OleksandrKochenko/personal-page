import { useState } from 'react';
import { MenuItem, Select } from '@mui/material';
import { ProjectCard } from './elements/project-card';
import { projects } from 'data/projects-data';
import './pages.scss';

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
      <ul className="projects_list">
        {projects.map(project => (
          <li key={project.id}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsPage;
