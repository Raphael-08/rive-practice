"use client";

import { useRive, useStateMachineInput } from "@rive-app/react-canvas";
import { useState } from "react";

export const Animation = () => {
    const STATE_MACHINE_NAME = 'State Machine 1';
    const ON_HOVER_INPUT_NAME = 'fireup';
    const {
      rive,
      RiveComponent: RiveComponentTouch
    } = useRive({
      src: 'http://localhost:3000/rocket.riv',
      stateMachines: STATE_MACHINE_NAME,
      artboard: 'Artboard',
      autoplay: true
    });
    const [isHovered, setIsHovered] = useState(false); // Both onHoverInput and onPressedInput are boolean inputs. To transition
    // states we need to set the value property to true or false.
  
    const onHoverInput = useStateMachineInput(rive, STATE_MACHINE_NAME, ON_HOVER_INPUT_NAME);

    function onMouseEnter() {
      onHoverInput.value = true;
      setIsHovered(true);
    }
  
    function onMouseLeave() {
      onHoverInput.value = false;
      setIsHovered(false);
    }
  
    return <>
            <div>
              <RiveComponentTouch className="h-96 w-96" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}/>
            </div>
          </>;
  }