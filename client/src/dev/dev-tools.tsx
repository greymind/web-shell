import * as React from 'react';

// Exported from redux-devtools
import { createDevTools } from 'redux-devtools';

// Monitors are separate packages, and you can make a custom one
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';
import ChartMonitor from 'redux-devtools-chart-monitor';
import SliderMonitor from 'redux-slider-monitor';
import Inspector from 'redux-devtools-inspector';

export function getDebugSessionKey() {
    // You can write custom logic here!
    // By default we try to read the key from ?debug_session=<key> in the address bar
    const matches = window.location.href.match(/[?&]debug_session=([^&#]+)\b/);
    return (matches && matches.length > 0) ? matches[1] : '';
}

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