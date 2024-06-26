import Image from 'next/image';
import './style.css';

export default function Header() {
    return (
        <header className="header flex items-center">
            <Image className='logo' src='/logo.png' alt='logo' title='logo' />
        </header>
    );

}