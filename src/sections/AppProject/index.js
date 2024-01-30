
// App.js
import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { Badge } from 'react-bootstrap';
import axios from 'axios';


const items = [
  { id: 1, text: 'Cras justo odio' },
  { id: 2, text: 'Cras justo odio' },
  { id: 3, text: 'Cras justo odio' },
];

const AppProject = () => {

  const mockProjectData = {
    'project_name': 'project3lt[3kyg[4ke',
    'project_block': {},
    'project_createTime': Date.now(),
    'description': 'Some description',
  }

  const createProject = async () => {
    try {
      const response = await axios.post('http://localhost:8082/projects',mockProjectData );

      if (response.status === 200) {
        console.log('Project created successfully');
        // Дополнительная логика по успешному созданию проекта
      } else {
        console.error('Failed to create project');
        // Дополнительная логика по ошибке создания проекта
      }
    } catch (error) {
      console.error('Error creating project:', error);
    }
  };

  // Вызываем функцию автоматически, например, при загрузке компонента
  createProject();





  return(
    <ListGroup as="ol" numbered>
      {items.map(item => (
        <ListGroup.Item
          key={item.id}
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">{item.text}</div>
          <Badge bg="primary" pill>
            редактировать
          </Badge>
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}

export default AppProject;