import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './items.module.css';

export default function Home() {
    const [shortcutData, setShortcutData] = useState([]);

    useEffect(() => {
        async function fetchShortcutData() {
            try {
                const response = await axios.get('https://api.testvalley.kr/main-shortcut/all');
                setShortcutData(response.data);
            } catch (error) {
                console.error('Error fetching shortcut data:', error);
            }
        }

        fetchShortcutData();
    }, []);

    return (
        <>
            <div className='m-5'>
                <div className='flex justify-center'>
                    {shortcutData.map(shortcut => (
                        <div className='flex flex-col justify-center px-5' key={shortcut.id}>
                            <img
                                src={shortcut.imageUrl}
                                data-src={shortcut.imageUrl}
                                alt={shortcut.title}
                                className={styles.imgAltText}
                            />
                            <div className={styles.text}>{shortcut.title}</div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
