interface ITracker {
    viewChanged: (view: string) => void;
    msisdnSubmitted: (msisdn: string) => void;
    advancedInFlow: (flow: string, action: string, args?: any) => void;
    advancedInPreFlow: (label: string, args?: any) => void;
    recedeInFlow: (flow: string, newState: string, args?: any) => void;
}
export default ITracker;
