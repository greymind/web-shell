import * as React from 'react';

// Exported from redux-devtools
import { createDevTools } from 'redux-devtools';

// Monitors are separate packages, and you can make a custom one
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';
import ChartMonitor from 'redux-devtools-chart-monitor';
import SliderMonitor from 'redux-slider-monitor';
import Inspector from 'redux-devtools-inspector';

// createDevTools takes a monitor and produces a DevTools component
const DevTools = createDevTools(
    <DockMonitor
        toggleVisibilityKey="ctrl-h"
        changePositionKey="ctrl-q"
        changeMonitorKey="ctrl-m"
        defaultIsVisible={false}
    >
        <LogMonitor theme="tomorrow" />
        <SliderMonitor />
        <Inspector />
        <ChartMonitor />
    </DockMonitor>
);

export default DevTools;