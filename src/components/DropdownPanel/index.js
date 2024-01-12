import { ListGroup, DropdownButton, Dropdown } from 'react-bootstrap';
import React from 'react';
import StartDialogue from './DropdownComponents/StartDialogue';
import { FaRegPlayCircle } from "react-icons/fa";
import { CgNotifications } from "react-icons/cg";
import { TfiComments } from "react-icons/tfi";
const DropdownComponent = () => {
  return (
    <ListGroup.Item className='border-0'>
      <DropdownButton   variant="link" title=''  >
        <Dropdown.Item   className='bg-transparent text-dark w-100'>
          <StartDialogue  image={<FaRegPlayCircle />} title='начало диалога' />
        </Dropdown.Item>
        <Dropdown.Item href="#" className='bg-transparent   text-dark w-100'>
          <StartDialogue  image={<CgNotifications />} title='состояние диалога' />
        </Dropdown.Item>
        <Dropdown.Item href="#" className='bg-transparent   text-dark w-100'>
          <StartDialogue image={<TfiComments />} title='комментарии' />
        </Dropdown.Item>
      </DropdownButton>
    </ListGroup.Item>
  );
}

export default DropdownComponent;
