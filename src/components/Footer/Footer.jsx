import { Teste } from '../Teste/Teste';

export const Footer = ({ teste }) => (
  <footer className='bg-dark text-light p-3 d-flex gap-1 justify-content-center'>
    © {new Date().getFullYear()} Copyright:
    <a className='text-light' href='https://devinhouse.tech/'>
      DEVinHouse {teste ? 'Teste' : ''}
    </a>
    <Teste nome='DevInHouse' />
  </footer>
);
