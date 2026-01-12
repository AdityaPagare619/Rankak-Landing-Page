import { useState, useEffect } from 'react';

const STORAGE_KEY = 'rankak_gamification';

const INITIAL_STATE = {
    streak: {
        current: 1,
        lastVisit: new Date().toISOString(),
        max: 1
    },
    xp: 0,
    lootBox: {
        unlocked: false,
        inventory: []
    }
};

export const useGamification = () => {
    const [gameState, setGameState] = useState(INITIAL_STATE);
    const [isLoaded, setIsLoaded] = useState(false);

    // Load state from localStorage on mount
    useEffect(() => {
        try {
            const savedState = localStorage.getItem(STORAGE_KEY);
            if (savedState) {
                const parsedState = JSON.parse(savedState);
                // Merge with initial state to handle schema updates
                const mergedState = { ...INITIAL_STATE, ...parsedState };
                
                // Check Streak Logic
                const now = new Date();
                const lastVisit = new Date(mergedState.streak.lastVisit);
                const diffTime = Math.abs(now - lastVisit);
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

                let newStreak = mergedState.streak.current;
                
                if (diffDays === 1) {
                    // Visited yesterday, increment streak
                    newStreak += 1;
                } else if (diffDays > 1) {
                    // Missed a day, reset streak
                    newStreak = 1;
                }
                // If diffDays === 0 (same day), do nothing

                const updatedState = {
                    ...mergedState,
                    streak: {
                        ...mergedState.streak,
                        current: newStreak,
                        max: Math.max(newStreak, mergedState.streak.max),
                        lastVisit: now.toISOString()
                    }
                };

                setGameState(updatedState);
                localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedState));
            } else {
                // First visit
                localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_STATE));
                setGameState(INITIAL_STATE);
            }
        } catch (error) {
            console.error('Failed to load gamification state:', error);
            // Fallback to initial state
            setGameState(INITIAL_STATE);
        } finally {
            setIsLoaded(true);
        }
    }, []);

    const addXP = (amount) => {
        setGameState(prev => {
            const newState = {
                ...prev,
                xp: prev.xp + amount
            };
            localStorage.setItem(STORAGE_KEY, JSON.stringify(newState));
            return newState;
        });
    };

    return {
        streak: gameState.streak.current,
        xp: gameState.xp,
        isLoaded,
        addXP
    };
};

export default useGamification;
