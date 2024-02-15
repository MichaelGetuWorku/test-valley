import { useEffect, useState } from 'react';
import { Carousel } from "@material-tailwind/react";
import axios from 'axios';

export function CarouselPage() {
    const [bannerData, setBannerData] = useState([]);

    useEffect(() => {
        async function fetchBannerData() {
            try {
                const response = await axios.get('https://api.testvalley.kr/main-banner/all');
                setBannerData(response.data);
            } catch (error) {
                console.error('Error fetching banner data:', error);
            }
        }

        fetchBannerData();
    }, []);

    return (
        <Carousel>
            {bannerData.map((banner) => (
                <img
                    key={banner.mainBannerId}
                    src={banner.pcImageUrl}
                    alt={banner.title}
                    className="h-full w-full object-cover"
                />
            ))}
        </Carousel>
    );
}
