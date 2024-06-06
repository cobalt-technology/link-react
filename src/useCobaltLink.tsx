import { useCallback, useEffect, useState } from 'react';
import useScript from './useScriptHooks';
import { UseCobaltLinkProps, UseCobaltLinkResponse } from './types';

export const useCobaltLink = (config: UseCobaltLinkProps): UseCobaltLinkResponse => {
    const [loading, error] = useScript({
        src: 'https://link.usecobalt.com/init.js',
        checkForExisting: true,
    });
    const [isReady, setIsReady] = useState(false);
    const isServer = (typeof window === 'undefined');
    const isReadyForInitialization = !isServer && !!window.CobaltLink && !loading && !error;

    useEffect(() => {
        if (isReadyForInitialization && window.CobaltLink) {
            setIsReady(true);
        }
    }, [isReadyForInitialization, config]);

    const init = useCallback(() => {
        if (window.CobaltLink) {
            window.CobaltLink.init(config);
        }
    }, [config]);

    return { init, isReady, error };
};
