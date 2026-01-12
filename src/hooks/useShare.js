import { useState } from 'react';

const useShare = () => {
    const [isSharing, setIsSharing] = useState(false);

    const share = async ({ title, text, url }) => {
        setIsSharing(true);
        try {
            if (navigator.share) {
                await navigator.share({
                    title,
                    text,
                    url
                });
                return true; // Share successful
            } else {
                // Fallback to clipboard
                await navigator.clipboard.writeText(`${title}\n${text}\n${url}`);
                alert('Link copied to clipboard! Share it with your squad.');
                return true; // Fallback successful
            }
        } catch (error) {
            console.error('Error sharing:', error);
            return false;
        } finally {
            setIsSharing(false);
        }
    };

    return { share, isSharing };
};

export default useShare;
