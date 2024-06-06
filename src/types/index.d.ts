export interface CobaltLink {
    init: (config: UseCobaltLinkProps) => void;
}

export interface UseCobaltLinkProps {
    token: string;
    onSuccess: (publicToken: string) => void;
}

export type UseCobaltLinkResponse = {
    init: (config: UseCobaltLinkProps) => void;
    isReady: boolean;
    error: ErrorEvent | null;
}

declare global {
    interface Window {
        CobaltLink: CobaltLink;
    }
}