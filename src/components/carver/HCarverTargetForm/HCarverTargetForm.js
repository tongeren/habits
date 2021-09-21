import HCarverTargetFormWrapper from "../HCarverTargetFormWrapper/HCarverTargetFormWrapper";
import HCarverTargets from "../HCarverTargets/HCarverTargets";

const HCarverTargetForm = () => {
    const targetsSubmitHandler = () => {

    };

    return (
        <HCarverTargetFormWrapper
            targetsSubmitHandler={ targetsSubmitHandler }
        >
            <HCarverTargets /> 
        </HCarverTargetFormWrapper>
    );
};

export default HCarverTargetForm;