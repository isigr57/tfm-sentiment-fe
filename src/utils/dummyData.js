
const longDesc = 'Experience the incredible capabilities of AI with the amazing flow created by Timbal AI. This groundbreaking technology seamlessly integrates advanced algorithms and intelligent design to provide an unparalleled user experience. Whether youre looking to streamline workflows, enhance productivity, or explore new innovative solutions, Timbal AIs creation stands out as a beacon of efficiency and sophistication in the world of artificial intelligence. Discover the future of AI with Timbal AIs exceptional flow, setting new standards and transforming possibilities into reality.';

// const initialNodes = [
//     { id: '1', type: 'customNode', data: { label: 'Succes Node', description: 'test description', status: 'success', icon: getRandomFile(), stepType: 'Model' }, position: { x: 0, y: 0 } },
//     { id: '2', type: 'customNode', data: { label: 'Running Node', description: 'lorem ipsi', status: 'running', icon: getRandomFile(), stepType: 'integration' }, position: { x: 300, y: 100 } },
//     { id: '3', type: 'customNode', data: { label: 'Error Node', description: 'lorem ipsi', status: 'error', icon: getRandomFile(), stepType: 'code' }, position: { x: 600, y: 200 } },
//     { id: '4', type: 'customNode', data: { label: 'Warning Node', description: 'lorem ipsi', status: 'warning', icon: getRandomFile(), stepType: 'Model' }, position: { x: 0, y: 200 } },
//     { id: '5', type: 'customNode', data: { label: 'Succes Node', description: 'test description', status: 'success', icon: getRandomFile(), stepType: 'Model' }, position: { x: 900, y: 100 } },
// ];

// const initialEdges = [
//     { id: 'e1-2', source: '1', target: '2', type: 'smoothstep' },
//     { id: 'e2-3', source: '2', target: '3', type: 'smoothstep' },
//     { id: 'e4-5', source: '3', target: '5', type: 'smoothstep' }
// ];

const defaultFlows = {
    '8ab13462-4a7f-4410-bfee-d5fe7b66452e': {
        id: '8ab13462-4a7f-4410-bfee-d5fe7b66452e',
        name: 'SuperPicth Analyzer by Timbal AI erfwf erw fewfe ferg reggrfe',
        lastRun: 'just now',
        isPublic: true,
        description: longDesc,
        status: 'success',
        images: [
            'https://www.timbal.ai/images/icons/gmail.png',
            'https://www.timbal.ai/images/icons/mistral.png',
            'https://www.timbal.ai/images/icons/market.png',
            'https://www.timbal.ai/images/icons/linkedin.png',
        ],
        nodes: [
            {
                id: '1',
                type: 'customNode',
                data: {
                    label: 'Analyze PDF',
                    icon: 'https://www.timbal.ai/images/icons/mistral.png',
                    status: 'success',
                    stepType: 'Model',
                    inputs: [
                        { type: 'file', name: 'Pitch PDF', description: 'The PDF file to be analyzed' },
                        { type: 'file', name: 'Current Portfolio', description: 'The current portfolio in a file' },
                        { type: 'text', name: 'Error', description: 'Error message', placeholder: 'Error message will be displayed here\n\n\n\n', multiline: true },
                        { type: 'bool', name: 'Is Error', description: 'Is there an error?', placeholder: 'Is there an error?', initialValue: true },
                        { type: 'number', name: 'Number', description: 'Number', placeholder: 'Number' },
                        { type: 'text', name: 'Text', description: 'Text', placeholder: 'Text', initialValue: 'Initial Value' },
                        { type: 'slider', name: 'Date', description: 'Date', placeholder: 'Date', initialValue: 50, min: 0, max: 100, step: 1 },
                        {
                            type: 'dropdown', name: 'Dropdown', description: 'Dropdown', placeholder: 'Dropdown', options: [
                                { value: '1', label: 'Option 1' },
                                { value: '2', label: 'Option 2' },
                                { value: '3', label: 'Option 3' },
                            ]
                        },
                    ],
                    advanced: [
                        { type: 'text', name: 'Error', description: 'Error message', placeholder: 'Error message will be displayed here\n\n\n\n', multiline: true }
                    ],
                },
                position: { x: 0, y: 0 }
            },
            { id: '2', type: 'customNode', data: { label: 'Market Analysis', icon: 'https://www.timbal.ai/images/icons/market', status: 'success', stepType: 'Model' }, position: { x: 600, y: 0 } },
            { id: '3', type: 'customNode', data: { label: 'Web Scrapper', icon: 'https://www.timbal.ai/images/icons/download.png', status: 'success', stepType: 'Model' }, position: { x: 300, y: -100 } },
            { id: '4', type: 'customNode', data: { label: 'LinkedIn Scrapper', icon: 'https://www.timbal.ai/images/icons/linkedin.png', status: 'success', stepType: 'integration' }, position: { x: 600, y: -100 } },
            { id: '5', type: 'customNode', data: { label: 'Contrast Info', icon: 'https://www.timbal.ai/images/icons/meta.png', status: 'success', stepType: 'Model' }, position: { x: 900, y: -100 } },
            { id: '6', type: 'customNode', data: { label: 'Evaluate Oportunity', icon: 'https://www.timbal.ai/images/icons/brain.png', status: 'success', stepType: 'Model' }, position: { x: 1200, y: 0 } },
            { id: '7', type: 'customNode', data: { label: 'Current Portfolio', icon: 'https://www.timbal.ai/images/icons/sheets.png', status: 'success', stepType: 'Model' }, position: { x: 900, y: 100 } }
        ],
        edges: [
            { id: 'e1-2', source: '1', target: '2', type: 'smoothstep' },
            { id: 'e1-3', source: '1', target: '3', type: 'smoothstep' },
            { id: 'e2-6', source: '2', target: '6', type: 'smoothstep' },
            { id: 'e3-4', source: '3', target: '4', type: 'smoothstep' },
            { id: 'e4-5', source: '4', target: '5', type: 'smoothstep' },
            { id: 'e5-6', source: '5', target: '6', type: 'smoothstep' },
            { id: 'e7-6', source: '7', target: '6', type: 'smoothstep' },
        ],
        IO: {
            inputs: [
                {
                    type: 'file',
                    name: 'Pitch PDF',
                    description: 'The PDF file to be analyzed',
                },
                {
                    type: 'text',
                    name: 'Your Investment Thesis',
                    placeholder: 'Describe the investment thesis here \n\n\n\n',
                }
            ],
            outputs: [
                {
                    type: 'text',
                    name: 'Analysis Result & Recommendations',
                    description: 'The analysis result and recommendations',
                    placeholder: 'The analysis result and recommendations will be displayed here\n\n\n\n',
                    multiline: true
                }
            ],
            notSelected: [
                {
                    type: 'text',
                    name: 'Error',
                    description: 'Error message',
                    placeholder: 'Error message will be displayed here\n\n\n\n',
                    multiline: true
                }
            ]
        },
    },
    '8ab13462-4a7f-4410-bfee-d5fe7b66452ef': {
        id: '8ab13462-4a7f-4410-bfee-d5fe7b66452e',
        name: 'SuperPicth Analyzer by Timbal AI',
        lastRun: 'just now',
        description: longDesc,
        status: 'success',
        images: [
            'https://www.timbal.ai/images/icons/gmail.png',
            'https://www.timbal.ai/images/icons/mistral.png',
            'https://www.timbal.ai/images/icons/market.png',
            'https://www.timbal.ai/images/icons/linkedin.png',
        ],
        nodes: [
            {
                id: '1',
                type: 'customNode',
                data: {
                    label: 'Analyze PDF',
                    icon: 'https://www.timbal.ai/images/icons/mistral.png',
                    status: 'success',
                    stepType: 'Model',
                    inputs: [
                        { type: 'file', name: 'Pitch PDF', description: 'The PDF file to be analyzed' },
                        { type: 'file', name: 'Current Portfolio', description: 'The current portfolio in a file' },
                        { type: 'text', name: 'Error', description: 'Error message', placeholder: 'Error message will be displayed here\n\n\n\n', multiline: true },
                        { type: 'bool', name: 'Is Error', description: 'Is there an error?', placeholder: 'Is there an error?', initialValue: true },
                        { type: 'number', name: 'Number', description: 'Number', placeholder: 'Number' },
                        { type: 'text', name: 'Text', description: 'Text', placeholder: 'Text', initialValue: 'Initial Value' },
                        { type: 'slider', name: 'Date', description: 'Date', placeholder: 'Date', initialValue: 50, min: 0, max: 100, step: 1 },
                        {
                            type: 'dropdown', name: 'Dropdown', description: 'Dropdown', placeholder: 'Dropdown', options: [
                                { value: '1', label: 'Option 1' },
                                { value: '2', label: 'Option 2' },
                                { value: '3', label: 'Option 3' },
                            ]
                        },
                    ],
                    advanced: [
                        { type: 'text', name: 'Error', description: 'Error message', placeholder: 'Error message will be displayed here\n\n\n\n', multiline: true }
                    ],
                },
                position: { x: 0, y: 0 }
            },
            { id: '2', type: 'customNode', data: { label: 'Market Analysis', icon: 'https://www.timbal.ai/images/icons/market', status: 'success', stepType: 'Model' }, position: { x: 600, y: 0 } },
            { id: '3', type: 'customNode', data: { label: 'Web Scrapper', icon: 'https://www.timbal.ai/images/icons/download.png', status: 'success', stepType: 'Model' }, position: { x: 300, y: -100 } },
            { id: '4', type: 'customNode', data: { label: 'LinkedIn Scrapper', icon: 'https://www.timbal.ai/images/icons/linkedin.png', status: 'success', stepType: 'integration' }, position: { x: 600, y: -100 } },
            { id: '5', type: 'customNode', data: { label: 'Contrast Info', icon: 'https://www.timbal.ai/images/icons/meta.png', status: 'success', stepType: 'Model' }, position: { x: 900, y: -100 } },
            { id: '6', type: 'customNode', data: { label: 'Evaluate Oportunity', icon: 'https://www.timbal.ai/images/icons/brain.png', status: 'success', stepType: 'Model' }, position: { x: 1200, y: 0 } },
            { id: '7', type: 'customNode', data: { label: 'Current Portfolio', icon: 'https://www.timbal.ai/images/icons/sheets.png', status: 'success', stepType: 'Model' }, position: { x: 900, y: 100 } }
        ],
        edges: [
            { id: 'e1-2', source: '1', target: '2', type: 'smoothstep' },
            { id: 'e1-3', source: '1', target: '3', type: 'smoothstep' },
            { id: 'e2-6', source: '2', target: '6', type: 'smoothstep' },
            { id: 'e3-4', source: '3', target: '4', type: 'smoothstep' },
            { id: 'e4-5', source: '4', target: '5', type: 'smoothstep' },
            { id: 'e5-6', source: '5', target: '6', type: 'smoothstep' },
            { id: 'e7-6', source: '7', target: '6', type: 'smoothstep' },
        ],
        IO: {
            inputs: [
                {
                    type: 'file',
                    name: 'Pitch PDF',
                    description: 'The PDF file to be analyzed',
                },
                {
                    type: 'text',
                    name: 'Your Investment Thesis',
                    placeholder: 'Describe the investment thesis here \n\n\n\n',
                }
            ],
            outputs: [
                {
                    type: 'text',
                    name: 'Analysis Result & Recommendations',
                    description: 'The analysis result and recommendations',
                    placeholder: 'The analysis result and recommendations will be displayed here\n\n\n\n',
                    multiline: true
                }
            ],
            notSelected: [
                {
                    type: 'text',
                    name: 'Error',
                    description: 'Error message',
                    placeholder: 'Error message will be displayed here\n\n\n\n',
                    multiline: true
                }
            ]
        },
    },
    '8ab13462-4a7f-4410-bfee-d5fe7b66452eff': {
        id: '8ab13462-4a7f-4410-bfee-d5fe7b66452e',
        name: 'SuperPicth Analyzer by Timbal AI',
        lastRun: 'just now',
        description: longDesc,
        status: 'success',
        images: [
            'https://www.timbal.ai/images/icons/gmail.png',
            'https://www.timbal.ai/images/icons/mistral.png',
            'https://www.timbal.ai/images/icons/market.png',
            'https://www.timbal.ai/images/icons/linkedin.png',
        ],
        nodes: [
            {
                id: '1',
                type: 'customNode',
                data: {
                    label: 'Analyze PDF',
                    icon: 'https://www.timbal.ai/images/icons/mistral.png',
                    status: 'success',
                    stepType: 'Model',
                    inputs: [
                        { type: 'file', name: 'Pitch PDF', description: 'The PDF file to be analyzed' },
                        { type: 'file', name: 'Current Portfolio', description: 'The current portfolio in a file' },
                        { type: 'text', name: 'Error', description: 'Error message', placeholder: 'Error message will be displayed here\n\n\n\n', multiline: true },
                        { type: 'bool', name: 'Is Error', description: 'Is there an error?', placeholder: 'Is there an error?', initialValue: true },
                        { type: 'number', name: 'Number', description: 'Number', placeholder: 'Number' },
                        { type: 'text', name: 'Text', description: 'Text', placeholder: 'Text', initialValue: 'Initial Value' },
                        { type: 'slider', name: 'Date', description: 'Date', placeholder: 'Date', initialValue: 50, min: 0, max: 100, step: 1 },
                        {
                            type: 'dropdown', name: 'Dropdown', description: 'Dropdown', placeholder: 'Dropdown', options: [
                                { value: '1', label: 'Option 1' },
                                { value: '2', label: 'Option 2' },
                                { value: '3', label: 'Option 3' },
                            ]
                        },
                    ],
                    advanced: [
                        { type: 'text', name: 'Error', description: 'Error message', placeholder: 'Error message will be displayed here\n\n\n\n', multiline: true }
                    ],
                },
                position: { x: 0, y: 0 }
            },
            { id: '2', type: 'customNode', data: { label: 'Market Analysis', icon: 'https://www.timbal.ai/images/icons/market', status: 'success', stepType: 'Model' }, position: { x: 600, y: 0 } },
            { id: '3', type: 'customNode', data: { label: 'Web Scrapper', icon: 'https://www.timbal.ai/images/icons/download.png', status: 'success', stepType: 'Model' }, position: { x: 300, y: -100 } },
            { id: '4', type: 'customNode', data: { label: 'LinkedIn Scrapper', icon: 'https://www.timbal.ai/images/icons/linkedin.png', status: 'success', stepType: 'integration' }, position: { x: 600, y: -100 } },
            { id: '5', type: 'customNode', data: { label: 'Contrast Info', icon: 'https://www.timbal.ai/images/icons/meta.png', status: 'success', stepType: 'Model' }, position: { x: 900, y: -100 } },
            { id: '6', type: 'customNode', data: { label: 'Evaluate Oportunity', icon: 'https://www.timbal.ai/images/icons/brain.png', status: 'success', stepType: 'Model' }, position: { x: 1200, y: 0 } },
            { id: '7', type: 'customNode', data: { label: 'Current Portfolio', icon: 'https://www.timbal.ai/images/icons/sheets.png', status: 'success', stepType: 'Model' }, position: { x: 900, y: 100 } }
        ],
        edges: [
            { id: 'e1-2', source: '1', target: '2', type: 'smoothstep' },
            { id: 'e1-3', source: '1', target: '3', type: 'smoothstep' },
            { id: 'e2-6', source: '2', target: '6', type: 'smoothstep' },
            { id: 'e3-4', source: '3', target: '4', type: 'smoothstep' },
            { id: 'e4-5', source: '4', target: '5', type: 'smoothstep' },
            { id: 'e5-6', source: '5', target: '6', type: 'smoothstep' },
            { id: 'e7-6', source: '7', target: '6', type: 'smoothstep' },
        ],
        IO: {
            inputs: [
                {
                    type: 'file',
                    name: 'Pitch PDF',
                    description: 'The PDF file to be analyzed',
                },
                {
                    type: 'text',
                    name: 'Your Investment Thesis',
                    placeholder: 'Describe the investment thesis here \n\n\n\n',
                }
            ],
            outputs: [
                {
                    type: 'text',
                    name: 'Analysis Result & Recommendations',
                    description: 'The analysis result and recommendations',
                    placeholder: 'The analysis result and recommendations will be displayed here\n\n\n\n',
                    multiline: true
                }
            ],
            notSelected: [
                {
                    type: 'text',
                    name: 'Error',
                    description: 'Error message',
                    placeholder: 'Error message will be displayed here\n\n\n\n',
                    multiline: true
                }
            ]
        },
    },
    '8ab13462-4a7f-4410-bfee-d5fe7b66452ewsSQ': {
        id: '8ab13462-4a7f-4410-bfee-d5fe7b66452e',
        name: 'SuperPicth Analyzer by Timbal AI',
        lastRun: 'just now',
        description: longDesc,
        status: 'success',
        images: [
            'https://www.timbal.ai/images/icons/gmail.png',
            'https://www.timbal.ai/images/icons/mistral.png',
            'https://www.timbal.ai/images/icons/market.png',
            'https://www.timbal.ai/images/icons/linkedin.png',
        ],
        nodes: [
            {
                id: '1',
                type: 'customNode',
                data: {
                    label: 'Analyze PDF',
                    icon: 'https://www.timbal.ai/images/icons/mistral.png',
                    status: 'success',
                    stepType: 'Model',
                    inputs: [
                        { type: 'file', name: 'Pitch PDF', description: 'The PDF file to be analyzed' },
                        { type: 'file', name: 'Current Portfolio', description: 'The current portfolio in a file' },
                        { type: 'text', name: 'Error', description: 'Error message', placeholder: 'Error message will be displayed here\n\n\n\n', multiline: true },
                        { type: 'bool', name: 'Is Error', description: 'Is there an error?', placeholder: 'Is there an error?', initialValue: true },
                        { type: 'number', name: 'Number', description: 'Number', placeholder: 'Number' },
                        { type: 'text', name: 'Text', description: 'Text', placeholder: 'Text', initialValue: 'Initial Value' },
                        { type: 'slider', name: 'Date', description: 'Date', placeholder: 'Date', initialValue: 50, min: 0, max: 100, step: 1 },
                        {
                            type: 'dropdown', name: 'Dropdown', description: 'Dropdown', placeholder: 'Dropdown', options: [
                                { value: '1', label: 'Option 1' },
                                { value: '2', label: 'Option 2' },
                                { value: '3', label: 'Option 3' },
                            ]
                        },
                    ],
                    advanced: [
                        { type: 'text', name: 'Error', description: 'Error message', placeholder: 'Error message will be displayed here\n\n\n\n', multiline: true }
                    ],
                },
                position: { x: 0, y: 0 }
            },
            { id: '2', type: 'customNode', data: { label: 'Market Analysis', icon: 'https://www.timbal.ai/images/icons/market', status: 'success', stepType: 'Model' }, position: { x: 600, y: 0 } },
            { id: '3', type: 'customNode', data: { label: 'Web Scrapper', icon: 'https://www.timbal.ai/images/icons/download.png', status: 'success', stepType: 'Model' }, position: { x: 300, y: -100 } },
            { id: '4', type: 'customNode', data: { label: 'LinkedIn Scrapper', icon: 'https://www.timbal.ai/images/icons/linkedin.png', status: 'success', stepType: 'integration' }, position: { x: 600, y: -100 } },
            { id: '5', type: 'customNode', data: { label: 'Contrast Info', icon: 'https://www.timbal.ai/images/icons/meta.png', status: 'success', stepType: 'Model' }, position: { x: 900, y: -100 } },
            { id: '6', type: 'customNode', data: { label: 'Evaluate Oportunity', icon: 'https://www.timbal.ai/images/icons/brain.png', status: 'success', stepType: 'Model' }, position: { x: 1200, y: 0 } },
            { id: '7', type: 'customNode', data: { label: 'Current Portfolio', icon: 'https://www.timbal.ai/images/icons/sheets.png', status: 'success', stepType: 'Model' }, position: { x: 900, y: 100 } }
        ],
        edges: [
            { id: 'e1-2', source: '1', target: '2', type: 'smoothstep' },
            { id: 'e1-3', source: '1', target: '3', type: 'smoothstep' },
            { id: 'e2-6', source: '2', target: '6', type: 'smoothstep' },
            { id: 'e3-4', source: '3', target: '4', type: 'smoothstep' },
            { id: 'e4-5', source: '4', target: '5', type: 'smoothstep' },
            { id: 'e5-6', source: '5', target: '6', type: 'smoothstep' },
            { id: 'e7-6', source: '7', target: '6', type: 'smoothstep' },
        ],
        IO: {
            inputs: [
                {
                    type: 'file',
                    name: 'Pitch PDF',
                    description: 'The PDF file to be analyzed',
                },
                {
                    type: 'text',
                    name: 'Your Investment Thesis',
                    placeholder: 'Describe the investment thesis here \n\n\n\n',
                }
            ],
            outputs: [
                {
                    type: 'text',
                    name: 'Analysis Result & Recommendations',
                    description: 'The analysis result and recommendations',
                    placeholder: 'The analysis result and recommendations will be displayed here\n\n\n\n',
                    multiline: true
                }
            ],
            notSelected: [
                {
                    type: 'text',
                    name: 'Error',
                    description: 'Error message',
                    placeholder: 'Error message will be displayed here\n\n\n\n',
                    multiline: true
                }
            ]
        },
    },
    '8ab13462-4a7f-4410-bfee-d5fe7b66452e23': {
        id: '8ab13462-4a7f-4410-bfee-d5fe7b66452e',
        name: 'SuperPicth Analyzer by Timbal AI',
        lastRun: 'just now',
        description: longDesc,
        status: 'success',
        images: [
            'https://www.timbal.ai/images/icons/gmail.png',
            'https://www.timbal.ai/images/icons/mistral.png',
            'https://www.timbal.ai/images/icons/market.png',
            'https://www.timbal.ai/images/icons/linkedin.png',
        ],
        nodes: [
            {
                id: '1',
                type: 'customNode',
                data: {
                    label: 'Analyze PDF',
                    icon: 'https://www.timbal.ai/images/icons/mistral.png',
                    status: 'success',
                    stepType: 'Model',
                    inputs: [
                        { type: 'file', name: 'Pitch PDF', description: 'The PDF file to be analyzed' },
                        { type: 'file', name: 'Current Portfolio', description: 'The current portfolio in a file' },
                        { type: 'text', name: 'Error', description: 'Error message', placeholder: 'Error message will be displayed here\n\n\n\n', multiline: true },
                        { type: 'bool', name: 'Is Error', description: 'Is there an error?', placeholder: 'Is there an error?', initialValue: true },
                        { type: 'number', name: 'Number', description: 'Number', placeholder: 'Number' },
                        { type: 'text', name: 'Text', description: 'Text', placeholder: 'Text', initialValue: 'Initial Value' },
                        { type: 'slider', name: 'Date', description: 'Date', placeholder: 'Date', initialValue: 50, min: 0, max: 100, step: 1 },
                        {
                            type: 'dropdown', name: 'Dropdown', description: 'Dropdown', placeholder: 'Dropdown', options: [
                                { value: '1', label: 'Option 1' },
                                { value: '2', label: 'Option 2' },
                                { value: '3', label: 'Option 3' },
                            ]
                        },
                    ],
                    advanced: [
                        { type: 'text', name: 'Error', description: 'Error message', placeholder: 'Error message will be displayed here\n\n\n\n', multiline: true }
                    ],
                },
                position: { x: 0, y: 0 }
            },
            { id: '2', type: 'customNode', data: { label: 'Market Analysis', icon: 'https://www.timbal.ai/images/icons/market', status: 'success', stepType: 'Model' }, position: { x: 600, y: 0 } },
            { id: '3', type: 'customNode', data: { label: 'Web Scrapper', icon: 'https://www.timbal.ai/images/icons/download.png', status: 'success', stepType: 'Model' }, position: { x: 300, y: -100 } },
            { id: '4', type: 'customNode', data: { label: 'LinkedIn Scrapper', icon: 'https://www.timbal.ai/images/icons/linkedin.png', status: 'success', stepType: 'integration' }, position: { x: 600, y: -100 } },
            { id: '5', type: 'customNode', data: { label: 'Contrast Info', icon: 'https://www.timbal.ai/images/icons/meta.png', status: 'success', stepType: 'Model' }, position: { x: 900, y: -100 } },
            { id: '6', type: 'customNode', data: { label: 'Evaluate Oportunity', icon: 'https://www.timbal.ai/images/icons/brain.png', status: 'success', stepType: 'Model' }, position: { x: 1200, y: 0 } },
            { id: '7', type: 'customNode', data: { label: 'Current Portfolio', icon: 'https://www.timbal.ai/images/icons/sheets.png', status: 'success', stepType: 'Model' }, position: { x: 900, y: 100 } }
        ],
        edges: [
            { id: 'e1-2', source: '1', target: '2', type: 'smoothstep' },
            { id: 'e1-3', source: '1', target: '3', type: 'smoothstep' },
            { id: 'e2-6', source: '2', target: '6', type: 'smoothstep' },
            { id: 'e3-4', source: '3', target: '4', type: 'smoothstep' },
            { id: 'e4-5', source: '4', target: '5', type: 'smoothstep' },
            { id: 'e5-6', source: '5', target: '6', type: 'smoothstep' },
            { id: 'e7-6', source: '7', target: '6', type: 'smoothstep' },
        ],
        IO: {
            inputs: [
                {
                    type: 'file',
                    name: 'Pitch PDF',
                    description: 'The PDF file to be analyzed',
                },
                {
                    type: 'text',
                    name: 'Your Investment Thesis',
                    placeholder: 'Describe the investment thesis here \n\n\n\n',
                }
            ],
            outputs: [
                {
                    type: 'text',
                    name: 'Analysis Result & Recommendations',
                    description: 'The analysis result and recommendations',
                    placeholder: 'The analysis result and recommendations will be displayed here\n\n\n\n',
                    multiline: true
                }
            ],
            notSelected: [
                {
                    type: 'text',
                    name: 'Error',
                    description: 'Error message',
                    placeholder: 'Error message will be displayed here\n\n\n\n',
                    multiline: true
                }
            ]
        },
    },
    '8ab13462-4a7f-4410-bfee-d5fe7b66452ePP': {
        id: '8ab13462-4a7f-4410-bfee-d5fe7b66452e',
        name: 'SuperPicth Analyzer by Timbal AI',
        lastRun: 'just now',
        description: longDesc,
        status: 'success',
        images: [
            'https://www.timbal.ai/images/icons/gmail.png',
            'https://www.timbal.ai/images/icons/mistral.png',
            'https://www.timbal.ai/images/icons/market.png',
            'https://www.timbal.ai/images/icons/linkedin.png',
        ],
        nodes: [
            {
                id: '1',
                type: 'customNode',
                data: {
                    label: 'Analyze PDF',
                    icon: 'https://www.timbal.ai/images/icons/mistral.png',
                    status: 'success',
                    stepType: 'Model',
                    inputs: [
                        { type: 'file', name: 'Pitch PDF', description: 'The PDF file to be analyzed' },
                        { type: 'file', name: 'Current Portfolio', description: 'The current portfolio in a file' },
                        { type: 'text', name: 'Error', description: 'Error message', placeholder: 'Error message will be displayed here\n\n\n\n', multiline: true },
                        { type: 'bool', name: 'Is Error', description: 'Is there an error?', placeholder: 'Is there an error?', initialValue: true },
                        { type: 'number', name: 'Number', description: 'Number', placeholder: 'Number' },
                        { type: 'text', name: 'Text', description: 'Text', placeholder: 'Text', initialValue: 'Initial Value' },
                        { type: 'slider', name: 'Date', description: 'Date', placeholder: 'Date', initialValue: 50, min: 0, max: 100, step: 1 },
                        {
                            type: 'dropdown', name: 'Dropdown', description: 'Dropdown', placeholder: 'Dropdown', options: [
                                { value: '1', label: 'Option 1' },
                                { value: '2', label: 'Option 2' },
                                { value: '3', label: 'Option 3' },
                            ]
                        },
                    ],
                    advanced: [
                        { type: 'text', name: 'Error', description: 'Error message', placeholder: 'Error message will be displayed here\n\n\n\n', multiline: true }
                    ],
                },
                position: { x: 0, y: 0 }
            },
            { id: '2', type: 'customNode', data: { label: 'Market Analysis', icon: 'https://www.timbal.ai/images/icons/market', status: 'success', stepType: 'Model' }, position: { x: 600, y: 0 } },
            { id: '3', type: 'customNode', data: { label: 'Web Scrapper', icon: 'https://www.timbal.ai/images/icons/download.png', status: 'success', stepType: 'Model' }, position: { x: 300, y: -100 } },
            { id: '4', type: 'customNode', data: { label: 'LinkedIn Scrapper', icon: 'https://www.timbal.ai/images/icons/linkedin.png', status: 'success', stepType: 'integration' }, position: { x: 600, y: -100 } },
            { id: '5', type: 'customNode', data: { label: 'Contrast Info', icon: 'https://www.timbal.ai/images/icons/meta.png', status: 'success', stepType: 'Model' }, position: { x: 900, y: -100 } },
            { id: '6', type: 'customNode', data: { label: 'Evaluate Oportunity', icon: 'https://www.timbal.ai/images/icons/brain.png', status: 'success', stepType: 'Model' }, position: { x: 1200, y: 0 } },
            { id: '7', type: 'customNode', data: { label: 'Current Portfolio', icon: 'https://www.timbal.ai/images/icons/sheets.png', status: 'success', stepType: 'Model' }, position: { x: 900, y: 100 } }
        ],
        edges: [
            { id: 'e1-2', source: '1', target: '2', type: 'smoothstep' },
            { id: 'e1-3', source: '1', target: '3', type: 'smoothstep' },
            { id: 'e2-6', source: '2', target: '6', type: 'smoothstep' },
            { id: 'e3-4', source: '3', target: '4', type: 'smoothstep' },
            { id: 'e4-5', source: '4', target: '5', type: 'smoothstep' },
            { id: 'e5-6', source: '5', target: '6', type: 'smoothstep' },
            { id: 'e7-6', source: '7', target: '6', type: 'smoothstep' },
        ],
        IO: {
            inputs: [
                {
                    type: 'file',
                    name: 'Pitch PDF',
                    description: 'The PDF file to be analyzed',
                },
                {
                    type: 'text',
                    name: 'Your Investment Thesis',
                    placeholder: 'Describe the investment thesis here \n\n\n\n',
                }
            ],
            outputs: [
                {
                    type: 'text',
                    name: 'Analysis Result & Recommendations',
                    description: 'The analysis result and recommendations',
                    placeholder: 'The analysis result and recommendations will be displayed here\n\n\n\n',
                    multiline: true
                }
            ],
            notSelected: [
                {
                    type: 'text',
                    name: 'Error',
                    description: 'Error message',
                    placeholder: 'Error message will be displayed here\n\n\n\n',
                    multiline: true
                }
            ]
        },
    },
    '8ab13462-4a7f-4410-bfee-d5fe7b66452e3': {
        id: '8ab13462-4a7f-4410-bfee-d5fe7b66452e',
        name: 'SuperPicth Analyzer by Timbal AI',
        lastRun: 'just now',
        description: longDesc,
        status: 'success',
        images: [
            'https://www.timbal.ai/images/icons/gmail.png',
            'https://www.timbal.ai/images/icons/mistral.png',
            'https://www.timbal.ai/images/icons/market.png',
            'https://www.timbal.ai/images/icons/linkedin.png',
        ],
        nodes: [
            {
                id: '1',
                type: 'customNode',
                data: {
                    label: 'Analyze PDF',
                    icon: 'https://www.timbal.ai/images/icons/mistral.png',
                    status: 'success',
                    stepType: 'Model',
                    inputs: [
                        { type: 'file', name: 'Pitch PDF', description: 'The PDF file to be analyzed' },
                        { type: 'file', name: 'Current Portfolio', description: 'The current portfolio in a file' },
                        { type: 'text', name: 'Error', description: 'Error message', placeholder: 'Error message will be displayed here\n\n\n\n', multiline: true },
                        { type: 'bool', name: 'Is Error', description: 'Is there an error?', placeholder: 'Is there an error?', initialValue: true },
                        { type: 'number', name: 'Number', description: 'Number', placeholder: 'Number' },
                        { type: 'text', name: 'Text', description: 'Text', placeholder: 'Text', initialValue: 'Initial Value' },
                        { type: 'slider', name: 'Date', description: 'Date', placeholder: 'Date', initialValue: 50, min: 0, max: 100, step: 1 },
                        {
                            type: 'dropdown', name: 'Dropdown', description: 'Dropdown', placeholder: 'Dropdown', options: [
                                { value: '1', label: 'Option 1' },
                                { value: '2', label: 'Option 2' },
                                { value: '3', label: 'Option 3' },
                            ]
                        },
                    ],
                    advanced: [
                        { type: 'text', name: 'Error', description: 'Error message', placeholder: 'Error message will be displayed here\n\n\n\n', multiline: true }
                    ],
                },
                position: { x: 0, y: 0 }
            },
            { id: '2', type: 'customNode', data: { label: 'Market Analysis', icon: 'https://www.timbal.ai/images/icons/market', status: 'success', stepType: 'Model' }, position: { x: 600, y: 0 } },
            { id: '3', type: 'customNode', data: { label: 'Web Scrapper', icon: 'https://www.timbal.ai/images/icons/download.png', status: 'success', stepType: 'Model' }, position: { x: 300, y: -100 } },
            { id: '4', type: 'customNode', data: { label: 'LinkedIn Scrapper', icon: 'https://www.timbal.ai/images/icons/linkedin.png', status: 'success', stepType: 'integration' }, position: { x: 600, y: -100 } },
            { id: '5', type: 'customNode', data: { label: 'Contrast Info', icon: 'https://www.timbal.ai/images/icons/meta.png', status: 'success', stepType: 'Model' }, position: { x: 900, y: -100 } },
            { id: '6', type: 'customNode', data: { label: 'Evaluate Oportunity', icon: 'https://www.timbal.ai/images/icons/brain.png', status: 'success', stepType: 'Model' }, position: { x: 1200, y: 0 } },
            { id: '7', type: 'customNode', data: { label: 'Current Portfolio', icon: 'https://www.timbal.ai/images/icons/sheets.png', status: 'success', stepType: 'Model' }, position: { x: 900, y: 100 } }
        ],
        edges: [
            { id: 'e1-2', source: '1', target: '2', type: 'smoothstep' },
            { id: 'e1-3', source: '1', target: '3', type: 'smoothstep' },
            { id: 'e2-6', source: '2', target: '6', type: 'smoothstep' },
            { id: 'e3-4', source: '3', target: '4', type: 'smoothstep' },
            { id: 'e4-5', source: '4', target: '5', type: 'smoothstep' },
            { id: 'e5-6', source: '5', target: '6', type: 'smoothstep' },
            { id: 'e7-6', source: '7', target: '6', type: 'smoothstep' },
        ],
        IO: {
            inputs: [
                {
                    type: 'file',
                    name: 'Pitch PDF',
                    description: 'The PDF file to be analyzed',
                },
                {
                    type: 'text',
                    name: 'Your Investment Thesis',
                    placeholder: 'Describe the investment thesis here \n\n\n\n',
                }
            ],
            outputs: [
                {
                    type: 'text',
                    name: 'Analysis Result & Recommendations',
                    description: 'The analysis result and recommendations',
                    placeholder: 'The analysis result and recommendations will be displayed here\n\n\n\n',
                    multiline: true
                }
            ],
            notSelected: [
                {
                    type: 'text',
                    name: 'Error',
                    description: 'Error message',
                    placeholder: 'Error message will be displayed here\n\n\n\n',
                    multiline: true
                }
            ]
        },
    },
    '8ab13462-4a7f-4410-bfee-d5fe7b66452e22': {
        id: '8ab13462-4a7f-4410-bfee-d5fe7b66452e',
        name: 'SuperPicth Analyzer by Timbal AI',
        lastRun: 'just now',
        description: longDesc,
        status: 'success',
        images: [
            'https://www.timbal.ai/images/icons/gmail.png',
            'https://www.timbal.ai/images/icons/mistral.png',
            'https://www.timbal.ai/images/icons/market.png',
            'https://www.timbal.ai/images/icons/linkedin.png',
        ],
        nodes: [
            {
                id: '1',
                type: 'customNode',
                data: {
                    label: 'Analyze PDF',
                    icon: 'https://www.timbal.ai/images/icons/mistral.png',
                    status: 'success',
                    stepType: 'Model',
                    inputs: [
                        { type: 'file', name: 'Pitch PDF', description: 'The PDF file to be analyzed' },
                        { type: 'file', name: 'Current Portfolio', description: 'The current portfolio in a file' },
                        { type: 'text', name: 'Error', description: 'Error message', placeholder: 'Error message will be displayed here\n\n\n\n', multiline: true },
                        { type: 'bool', name: 'Is Error', description: 'Is there an error?', placeholder: 'Is there an error?', initialValue: true },
                        { type: 'number', name: 'Number', description: 'Number', placeholder: 'Number' },
                        { type: 'text', name: 'Text', description: 'Text', placeholder: 'Text', initialValue: 'Initial Value' },
                        { type: 'slider', name: 'Date', description: 'Date', placeholder: 'Date', initialValue: 50, min: 0, max: 100, step: 1 },
                        {
                            type: 'dropdown', name: 'Dropdown', description: 'Dropdown', placeholder: 'Dropdown', options: [
                                { value: '1', label: 'Option 1' },
                                { value: '2', label: 'Option 2' },
                                { value: '3', label: 'Option 3' },
                            ]
                        },
                    ],
                    advanced: [
                        { type: 'text', name: 'Error', description: 'Error message', placeholder: 'Error message will be displayed here\n\n\n\n', multiline: true }
                    ],
                },
                position: { x: 0, y: 0 }
            },
            { id: '2', type: 'customNode', data: { label: 'Market Analysis', icon: 'https://www.timbal.ai/images/icons/market', status: 'success', stepType: 'Model' }, position: { x: 600, y: 0 } },
            { id: '3', type: 'customNode', data: { label: 'Web Scrapper', icon: 'https://www.timbal.ai/images/icons/download.png', status: 'success', stepType: 'Model' }, position: { x: 300, y: -100 } },
            { id: '4', type: 'customNode', data: { label: 'LinkedIn Scrapper', icon: 'https://www.timbal.ai/images/icons/linkedin.png', status: 'success', stepType: 'integration' }, position: { x: 600, y: -100 } },
            { id: '5', type: 'customNode', data: { label: 'Contrast Info', icon: 'https://www.timbal.ai/images/icons/meta.png', status: 'success', stepType: 'Model' }, position: { x: 900, y: -100 } },
            { id: '6', type: 'customNode', data: { label: 'Evaluate Oportunity', icon: 'https://www.timbal.ai/images/icons/brain.png', status: 'success', stepType: 'Model' }, position: { x: 1200, y: 0 } },
            { id: '7', type: 'customNode', data: { label: 'Current Portfolio', icon: 'https://www.timbal.ai/images/icons/sheets.png', status: 'success', stepType: 'Model' }, position: { x: 900, y: 100 } }
        ],
        edges: [
            { id: 'e1-2', source: '1', target: '2', type: 'smoothstep' },
            { id: 'e1-3', source: '1', target: '3', type: 'smoothstep' },
            { id: 'e2-6', source: '2', target: '6', type: 'smoothstep' },
            { id: 'e3-4', source: '3', target: '4', type: 'smoothstep' },
            { id: 'e4-5', source: '4', target: '5', type: 'smoothstep' },
            { id: 'e5-6', source: '5', target: '6', type: 'smoothstep' },
            { id: 'e7-6', source: '7', target: '6', type: 'smoothstep' },
        ],
        IO: {
            inputs: [
                {
                    type: 'file',
                    name: 'Pitch PDF',
                    description: 'The PDF file to be analyzed',
                },
                {
                    type: 'text',
                    name: 'Your Investment Thesis',
                    placeholder: 'Describe the investment thesis here \n\n\n\n',
                }
            ],
            outputs: [
                {
                    type: 'text',
                    name: 'Analysis Result & Recommendations',
                    description: 'The analysis result and recommendations',
                    placeholder: 'The analysis result and recommendations will be displayed here\n\n\n\n',
                    multiline: true
                }
            ],
            notSelected: [
                {
                    type: 'text',
                    name: 'Error',
                    description: 'Error message',
                    placeholder: 'Error message will be displayed here\n\n\n\n',
                    multiline: true
                }
            ]
        },
    },
    '8ab13462-4a7f-4410-bfee-d5fe7b66452eAA': {
        id: '8ab13462-4a7f-4410-bfee-d5fe7b66452e',
        name: 'SuperPicth Analyzer by Timbal AI',
        lastRun: 'just now',
        description: longDesc,
        status: 'success',
        images: [
            'https://www.timbal.ai/images/icons/gmail.png',
            'https://www.timbal.ai/images/icons/mistral.png',
            'https://www.timbal.ai/images/icons/market.png',
            'https://www.timbal.ai/images/icons/linkedin.png',
        ],
        nodes: [
            {
                id: '1',
                type: 'customNode',
                data: {
                    label: 'Analyze PDF',
                    icon: 'https://www.timbal.ai/images/icons/mistral.png',
                    status: 'success',
                    stepType: 'Model',
                    inputs: [
                        { type: 'file', name: 'Pitch PDF', description: 'The PDF file to be analyzed' },
                        { type: 'file', name: 'Current Portfolio', description: 'The current portfolio in a file' },
                        { type: 'text', name: 'Error', description: 'Error message', placeholder: 'Error message will be displayed here\n\n\n\n', multiline: true },
                        { type: 'bool', name: 'Is Error', description: 'Is there an error?', placeholder: 'Is there an error?', initialValue: true },
                        { type: 'number', name: 'Number', description: 'Number', placeholder: 'Number' },
                        { type: 'text', name: 'Text', description: 'Text', placeholder: 'Text', initialValue: 'Initial Value' },
                        { type: 'slider', name: 'Date', description: 'Date', placeholder: 'Date', initialValue: 50, min: 0, max: 100, step: 1 },
                        {
                            type: 'dropdown', name: 'Dropdown', description: 'Dropdown', placeholder: 'Dropdown', options: [
                                { value: '1', label: 'Option 1' },
                                { value: '2', label: 'Option 2' },
                                { value: '3', label: 'Option 3' },
                            ]
                        },
                    ],
                    advanced: [
                        { type: 'text', name: 'Error', description: 'Error message', placeholder: 'Error message will be displayed here\n\n\n\n', multiline: true }
                    ],
                },
                position: { x: 0, y: 0 }
            },
            { id: '2', type: 'customNode', data: { label: 'Market Analysis', icon: 'https://www.timbal.ai/images/icons/market', status: 'success', stepType: 'Model' }, position: { x: 600, y: 0 } },
            { id: '3', type: 'customNode', data: { label: 'Web Scrapper', icon: 'https://www.timbal.ai/images/icons/download.png', status: 'success', stepType: 'Model' }, position: { x: 300, y: -100 } },
            { id: '4', type: 'customNode', data: { label: 'LinkedIn Scrapper', icon: 'https://www.timbal.ai/images/icons/linkedin.png', status: 'success', stepType: 'integration' }, position: { x: 600, y: -100 } },
            { id: '5', type: 'customNode', data: { label: 'Contrast Info', icon: 'https://www.timbal.ai/images/icons/meta.png', status: 'success', stepType: 'Model' }, position: { x: 900, y: -100 } },
            { id: '6', type: 'customNode', data: { label: 'Evaluate Oportunity', icon: 'https://www.timbal.ai/images/icons/brain.png', status: 'success', stepType: 'Model' }, position: { x: 1200, y: 0 } },
            { id: '7', type: 'customNode', data: { label: 'Current Portfolio', icon: 'https://www.timbal.ai/images/icons/sheets.png', status: 'success', stepType: 'Model' }, position: { x: 900, y: 100 } }
        ],
        edges: [
            { id: 'e1-2', source: '1', target: '2', type: 'smoothstep' },
            { id: 'e1-3', source: '1', target: '3', type: 'smoothstep' },
            { id: 'e2-6', source: '2', target: '6', type: 'smoothstep' },
            { id: 'e3-4', source: '3', target: '4', type: 'smoothstep' },
            { id: 'e4-5', source: '4', target: '5', type: 'smoothstep' },
            { id: 'e5-6', source: '5', target: '6', type: 'smoothstep' },
            { id: 'e7-6', source: '7', target: '6', type: 'smoothstep' },
        ],
        IO: {
            inputs: [
                {
                    type: 'file',
                    name: 'Pitch PDF',
                    description: 'The PDF file to be analyzed',
                },
                {
                    type: 'text',
                    name: 'Your Investment Thesis',
                    placeholder: 'Describe the investment thesis here \n\n\n\n',
                }
            ],
            outputs: [
                {
                    type: 'text',
                    name: 'Analysis Result & Recommendations',
                    description: 'The analysis result and recommendations',
                    placeholder: 'The analysis result and recommendations will be displayed here\n\n\n\n',
                    multiline: true
                }
            ],
            notSelected: [
                {
                    type: 'text',
                    name: 'Error',
                    description: 'Error message',
                    placeholder: 'Error message will be displayed here\n\n\n\n',
                    multiline: true
                }
            ]
        },
    },
    '8ab13462-4a7f-4410-bfee-d5fe7b66452eCC': {
        id: '8ab13462-4a7f-4410-bfee-d5fe7b66452e',
        name: 'SuperPicth Analyzer by Timbal AI',
        lastRun: 'just now',
        description: longDesc,
        status: 'success',
        images: [
            'https://www.timbal.ai/images/icons/gmail.png',
            'https://www.timbal.ai/images/icons/mistral.png',
            'https://www.timbal.ai/images/icons/market.png',
            'https://www.timbal.ai/images/icons/linkedin.png',
        ],
        nodes: [
            {
                id: '1',
                type: 'customNode',
                data: {
                    label: 'Analyze PDF',
                    icon: 'https://www.timbal.ai/images/icons/mistral.png',
                    status: 'success',
                    stepType: 'Model',
                    inputs: [
                        { type: 'file', name: 'Pitch PDF', description: 'The PDF file to be analyzed' },
                        { type: 'file', name: 'Current Portfolio', description: 'The current portfolio in a file' },
                        { type: 'text', name: 'Error', description: 'Error message', placeholder: 'Error message will be displayed here\n\n\n\n', multiline: true },
                        { type: 'bool', name: 'Is Error', description: 'Is there an error?', placeholder: 'Is there an error?', initialValue: true },
                        { type: 'number', name: 'Number', description: 'Number', placeholder: 'Number' },
                        { type: 'text', name: 'Text', description: 'Text', placeholder: 'Text', initialValue: 'Initial Value' },
                        { type: 'slider', name: 'Date', description: 'Date', placeholder: 'Date', initialValue: 50, min: 0, max: 100, step: 1 },
                        {
                            type: 'dropdown', name: 'Dropdown', description: 'Dropdown', placeholder: 'Dropdown', options: [
                                { value: '1', label: 'Option 1' },
                                { value: '2', label: 'Option 2' },
                                { value: '3', label: 'Option 3' },
                            ]
                        },
                    ],
                    advanced: [
                        { type: 'text', name: 'Error', description: 'Error message', placeholder: 'Error message will be displayed here\n\n\n\n', multiline: true }
                    ],
                },
                position: { x: 0, y: 0 }
            },
            { id: '2', type: 'customNode', data: { label: 'Market Analysis', icon: 'https://www.timbal.ai/images/icons/market', status: 'success', stepType: 'Model' }, position: { x: 600, y: 0 } },
            { id: '3', type: 'customNode', data: { label: 'Web Scrapper', icon: 'https://www.timbal.ai/images/icons/download.png', status: 'success', stepType: 'Model' }, position: { x: 300, y: -100 } },
            { id: '4', type: 'customNode', data: { label: 'LinkedIn Scrapper', icon: 'https://www.timbal.ai/images/icons/linkedin.png', status: 'success', stepType: 'integration' }, position: { x: 600, y: -100 } },
            { id: '5', type: 'customNode', data: { label: 'Contrast Info', icon: 'https://www.timbal.ai/images/icons/meta.png', status: 'success', stepType: 'Model' }, position: { x: 900, y: -100 } },
            { id: '6', type: 'customNode', data: { label: 'Evaluate Oportunity', icon: 'https://www.timbal.ai/images/icons/brain.png', status: 'success', stepType: 'Model' }, position: { x: 1200, y: 0 } },
            { id: '7', type: 'customNode', data: { label: 'Current Portfolio', icon: 'https://www.timbal.ai/images/icons/sheets.png', status: 'success', stepType: 'Model' }, position: { x: 900, y: 100 } }
        ],
        edges: [
            { id: 'e1-2', source: '1', target: '2', type: 'smoothstep' },
            { id: 'e1-3', source: '1', target: '3', type: 'smoothstep' },
            { id: 'e2-6', source: '2', target: '6', type: 'smoothstep' },
            { id: 'e3-4', source: '3', target: '4', type: 'smoothstep' },
            { id: 'e4-5', source: '4', target: '5', type: 'smoothstep' },
            { id: 'e5-6', source: '5', target: '6', type: 'smoothstep' },
            { id: 'e7-6', source: '7', target: '6', type: 'smoothstep' },
        ],
        IO: {
            inputs: [
                {
                    type: 'file',
                    name: 'Pitch PDF',
                    description: 'The PDF file to be analyzed',
                },
                {
                    type: 'text',
                    name: 'Your Investment Thesis',
                    placeholder: 'Describe the investment thesis here \n\n\n\n',
                }
            ],
            outputs: [
                {
                    type: 'text',
                    name: 'Analysis Result & Recommendations',
                    description: 'The analysis result and recommendations',
                    placeholder: 'The analysis result and recommendations will be displayed here\n\n\n\n',
                    multiline: true
                }
            ],
            notSelected: [
                {
                    type: 'text',
                    name: 'Error',
                    description: 'Error message',
                    placeholder: 'Error message will be displayed here\n\n\n\n',
                    multiline: true
                }
            ]
        },
    },
    '8ab13462-4a7f-4410-bfee-d5fe7b66452e11': {
        id: '8ab13462-4a7f-4410-bfee-d5fe7b66452e',
        name: 'SuperPicth Analyzer by Timbal AI',
        lastRun: 'just now',
        description: longDesc,
        status: 'success',
        images: [
            'https://www.timbal.ai/images/icons/gmail.png',
            'https://www.timbal.ai/images/icons/mistral.png',
            'https://www.timbal.ai/images/icons/market.png',
            'https://www.timbal.ai/images/icons/linkedin.png',
        ],
        nodes: [
            {
                id: '1',
                type: 'customNode',
                data: {
                    label: 'Analyze PDF',
                    icon: 'https://www.timbal.ai/images/icons/mistral.png',
                    status: 'success',
                    stepType: 'Model',
                    inputs: [
                        { type: 'file', name: 'Pitch PDF', description: 'The PDF file to be analyzed' },
                        { type: 'file', name: 'Current Portfolio', description: 'The current portfolio in a file' },
                        { type: 'text', name: 'Error', description: 'Error message', placeholder: 'Error message will be displayed here\n\n\n\n', multiline: true },
                        { type: 'bool', name: 'Is Error', description: 'Is there an error?', placeholder: 'Is there an error?', initialValue: true },
                        { type: 'number', name: 'Number', description: 'Number', placeholder: 'Number' },
                        { type: 'text', name: 'Text', description: 'Text', placeholder: 'Text', initialValue: 'Initial Value' },
                        { type: 'slider', name: 'Date', description: 'Date', placeholder: 'Date', initialValue: 50, min: 0, max: 100, step: 1 },
                        {
                            type: 'dropdown', name: 'Dropdown', description: 'Dropdown', placeholder: 'Dropdown', options: [
                                { value: '1', label: 'Option 1' },
                                { value: '2', label: 'Option 2' },
                                { value: '3', label: 'Option 3' },
                            ]
                        },
                    ],
                    advanced: [
                        { type: 'text', name: 'Error', description: 'Error message', placeholder: 'Error message will be displayed here\n\n\n\n', multiline: true }
                    ],
                },
                position: { x: 0, y: 0 }
            },
            { id: '2', type: 'customNode', data: { label: 'Market Analysis', icon: 'https://www.timbal.ai/images/icons/market', status: 'success', stepType: 'Model' }, position: { x: 600, y: 0 } },
            { id: '3', type: 'customNode', data: { label: 'Web Scrapper', icon: 'https://www.timbal.ai/images/icons/download.png', status: 'success', stepType: 'Model' }, position: { x: 300, y: -100 } },
            { id: '4', type: 'customNode', data: { label: 'LinkedIn Scrapper', icon: 'https://www.timbal.ai/images/icons/linkedin.png', status: 'success', stepType: 'integration' }, position: { x: 600, y: -100 } },
            { id: '5', type: 'customNode', data: { label: 'Contrast Info', icon: 'https://www.timbal.ai/images/icons/meta.png', status: 'success', stepType: 'Model' }, position: { x: 900, y: -100 } },
            { id: '6', type: 'customNode', data: { label: 'Evaluate Oportunity', icon: 'https://www.timbal.ai/images/icons/brain.png', status: 'success', stepType: 'Model' }, position: { x: 1200, y: 0 } },
            { id: '7', type: 'customNode', data: { label: 'Current Portfolio', icon: 'https://www.timbal.ai/images/icons/sheets.png', status: 'success', stepType: 'Model' }, position: { x: 900, y: 100 } }
        ],
        edges: [
            { id: 'e1-2', source: '1', target: '2', type: 'smoothstep' },
            { id: 'e1-3', source: '1', target: '3', type: 'smoothstep' },
            { id: 'e2-6', source: '2', target: '6', type: 'smoothstep' },
            { id: 'e3-4', source: '3', target: '4', type: 'smoothstep' },
            { id: 'e4-5', source: '4', target: '5', type: 'smoothstep' },
            { id: 'e5-6', source: '5', target: '6', type: 'smoothstep' },
            { id: 'e7-6', source: '7', target: '6', type: 'smoothstep' },
        ],
        IO: {
            inputs: [
                {
                    type: 'file',
                    name: 'Pitch PDF',
                    description: 'The PDF file to be analyzed',
                },
                {
                    type: 'text',
                    name: 'Your Investment Thesis',
                    placeholder: 'Describe the investment thesis here \n\n\n\n',
                }
            ],
            outputs: [
                {
                    type: 'text',
                    name: 'Analysis Result & Recommendations',
                    description: 'The analysis result and recommendations',
                    placeholder: 'The analysis result and recommendations will be displayed here\n\n\n\n',
                    multiline: true
                }
            ],
            notSelected: [
                {
                    type: 'text',
                    name: 'Error',
                    description: 'Error message',
                    placeholder: 'Error message will be displayed here\n\n\n\n',
                    multiline: true
                }
            ]
        },
    },
    '8ab13462-4a7f-4410-bfee-d5fe7b66452e1': {
        id: '8ab13462-4a7f-4410-bfee-d5fe7b66452e',
        name: 'SuperPicth Analyzer by Timbal AI',
        lastRun: 'just now',
        description: longDesc,
        status: 'success',
        images: [
            'https://www.timbal.ai/images/icons/gmail.png',
            'https://www.timbal.ai/images/icons/mistral.png',
            'https://www.timbal.ai/images/icons/market.png',
            'https://www.timbal.ai/images/icons/linkedin.png',
        ],
        nodes: [
            {
                id: '1',
                type: 'customNode',
                data: {
                    label: 'Analyze PDF',
                    icon: 'https://www.timbal.ai/images/icons/mistral.png',
                    status: 'success',
                    stepType: 'Model',
                    inputs: [
                        { type: 'file', name: 'Pitch PDF', description: 'The PDF file to be analyzed' },
                        { type: 'file', name: 'Current Portfolio', description: 'The current portfolio in a file' },
                        { type: 'text', name: 'Error', description: 'Error message', placeholder: 'Error message will be displayed here\n\n\n\n', multiline: true },
                        { type: 'bool', name: 'Is Error', description: 'Is there an error?', placeholder: 'Is there an error?', initialValue: true },
                        { type: 'number', name: 'Number', description: 'Number', placeholder: 'Number' },
                        { type: 'text', name: 'Text', description: 'Text', placeholder: 'Text', initialValue: 'Initial Value' },
                        { type: 'slider', name: 'Date', description: 'Date', placeholder: 'Date', initialValue: 50, min: 0, max: 100, step: 1 },
                        {
                            type: 'dropdown', name: 'Dropdown', description: 'Dropdown', placeholder: 'Dropdown', options: [
                                { value: '1', label: 'Option 1' },
                                { value: '2', label: 'Option 2' },
                                { value: '3', label: 'Option 3' },
                            ]
                        },
                    ],
                    advanced: [
                        { type: 'text', name: 'Error', description: 'Error message', placeholder: 'Error message will be displayed here\n\n\n\n', multiline: true }
                    ],
                },
                position: { x: 0, y: 0 }
            },
            { id: '2', type: 'customNode', data: { label: 'Market Analysis', icon: 'https://www.timbal.ai/images/icons/market', status: 'success', stepType: 'Model' }, position: { x: 600, y: 0 } },
            { id: '3', type: 'customNode', data: { label: 'Web Scrapper', icon: 'https://www.timbal.ai/images/icons/download.png', status: 'success', stepType: 'Model' }, position: { x: 300, y: -100 } },
            { id: '4', type: 'customNode', data: { label: 'LinkedIn Scrapper', icon: 'https://www.timbal.ai/images/icons/linkedin.png', status: 'success', stepType: 'integration' }, position: { x: 600, y: -100 } },
            { id: '5', type: 'customNode', data: { label: 'Contrast Info', icon: 'https://www.timbal.ai/images/icons/meta.png', status: 'success', stepType: 'Model' }, position: { x: 900, y: -100 } },
            { id: '6', type: 'customNode', data: { label: 'Evaluate Oportunity', icon: 'https://www.timbal.ai/images/icons/brain.png', status: 'success', stepType: 'Model' }, position: { x: 1200, y: 0 } },
            { id: '7', type: 'customNode', data: { label: 'Current Portfolio', icon: 'https://www.timbal.ai/images/icons/sheets.png', status: 'success', stepType: 'Model' }, position: { x: 900, y: 100 } }
        ],
        edges: [
            { id: 'e1-2', source: '1', target: '2', type: 'smoothstep' },
            { id: 'e1-3', source: '1', target: '3', type: 'smoothstep' },
            { id: 'e2-6', source: '2', target: '6', type: 'smoothstep' },
            { id: 'e3-4', source: '3', target: '4', type: 'smoothstep' },
            { id: 'e4-5', source: '4', target: '5', type: 'smoothstep' },
            { id: 'e5-6', source: '5', target: '6', type: 'smoothstep' },
            { id: 'e7-6', source: '7', target: '6', type: 'smoothstep' },
        ],
        IO: {
            inputs: [
                {
                    type: 'file',
                    name: 'Pitch PDF',
                    description: 'The PDF file to be analyzed',
                },
                {
                    type: 'text',
                    name: 'Your Investment Thesis',
                    placeholder: 'Describe the investment thesis here \n\n\n\n',
                }
            ],
            outputs: [
                {
                    type: 'text',
                    name: 'Analysis Result & Recommendations',
                    description: 'The analysis result and recommendations',
                    placeholder: 'The analysis result and recommendations will be displayed here\n\n\n\n',
                    multiline: true
                }
            ],
            notSelected: [
                {
                    type: 'text',
                    name: 'Error',
                    description: 'Error message',
                    placeholder: 'Error message will be displayed here\n\n\n\n',
                    multiline: true
                }
            ]
        },
    },
    '8ab13462-4a7f-4410-bfee-d5fe7b66452e2': {
        id: '8ab13462-4a7f-4410-bfee-d5fe7b66452e',
        name: 'SuperPicth Analyzer by Timbal AI',
        lastRun: 'just now',
        description: longDesc,
        status: 'success',
        images: [
            'https://www.timbal.ai/images/icons/gmail.png',
            'https://www.timbal.ai/images/icons/mistral.png',
            'https://www.timbal.ai/images/icons/market.png',
            'https://www.timbal.ai/images/icons/linkedin.png',
        ],
        nodes: [
            {
                id: '1',
                type: 'customNode',
                data: {
                    label: 'Analyze PDF',
                    icon: 'https://www.timbal.ai/images/icons/mistral.png',
                    status: 'success',
                    stepType: 'Model',
                    inputs: [
                        { type: 'file', name: 'Pitch PDF', description: 'The PDF file to be analyzed' },
                        { type: 'file', name: 'Current Portfolio', description: 'The current portfolio in a file' },
                        { type: 'text', name: 'Error', description: 'Error message', placeholder: 'Error message will be displayed here\n\n\n\n', multiline: true },
                        { type: 'bool', name: 'Is Error', description: 'Is there an error?', placeholder: 'Is there an error?', initialValue: true },
                        { type: 'number', name: 'Number', description: 'Number', placeholder: 'Number' },
                        { type: 'text', name: 'Text', description: 'Text', placeholder: 'Text', initialValue: 'Initial Value' },
                        { type: 'slider', name: 'Date', description: 'Date', placeholder: 'Date', initialValue: 50, min: 0, max: 100, step: 1 },
                        {
                            type: 'dropdown', name: 'Dropdown', description: 'Dropdown', placeholder: 'Dropdown', options: [
                                { value: '1', label: 'Option 1' },
                                { value: '2', label: 'Option 2' },
                                { value: '3', label: 'Option 3' },
                            ]
                        },
                    ],
                    advanced: [
                        { type: 'text', name: 'Error', description: 'Error message', placeholder: 'Error message will be displayed here\n\n\n\n', multiline: true }
                    ],
                },
                position: { x: 0, y: 0 }
            },
            { id: '2', type: 'customNode', data: { label: 'Market Analysis', icon: 'https://www.timbal.ai/images/icons/market', status: 'success', stepType: 'Model' }, position: { x: 600, y: 0 } },
            { id: '3', type: 'customNode', data: { label: 'Web Scrapper', icon: 'https://www.timbal.ai/images/icons/download.png', status: 'success', stepType: 'Model' }, position: { x: 300, y: -100 } },
            { id: '4', type: 'customNode', data: { label: 'LinkedIn Scrapper', icon: 'https://www.timbal.ai/images/icons/linkedin.png', status: 'success', stepType: 'integration' }, position: { x: 600, y: -100 } },
            { id: '5', type: 'customNode', data: { label: 'Contrast Info', icon: 'https://www.timbal.ai/images/icons/meta.png', status: 'success', stepType: 'Model' }, position: { x: 900, y: -100 } },
            { id: '6', type: 'customNode', data: { label: 'Evaluate Oportunity', icon: 'https://www.timbal.ai/images/icons/brain.png', status: 'success', stepType: 'Model' }, position: { x: 1200, y: 0 } },
            { id: '7', type: 'customNode', data: { label: 'Current Portfolio', icon: 'https://www.timbal.ai/images/icons/sheets.png', status: 'success', stepType: 'Model' }, position: { x: 900, y: 100 } }
        ],
        edges: [
            { id: 'e1-2', source: '1', target: '2', type: 'smoothstep' },
            { id: 'e1-3', source: '1', target: '3', type: 'smoothstep' },
            { id: 'e2-6', source: '2', target: '6', type: 'smoothstep' },
            { id: 'e3-4', source: '3', target: '4', type: 'smoothstep' },
            { id: 'e4-5', source: '4', target: '5', type: 'smoothstep' },
            { id: 'e5-6', source: '5', target: '6', type: 'smoothstep' },
            { id: 'e7-6', source: '7', target: '6', type: 'smoothstep' },
        ],
        IO: {
            inputs: [
                {
                    type: 'file',
                    name: 'Pitch PDF',
                    description: 'The PDF file to be analyzed',
                },
                {
                    type: 'text',
                    name: 'Your Investment Thesis',
                    placeholder: 'Describe the investment thesis here \n\n\n\n',
                }
            ],
            outputs: [
                {
                    type: 'text',
                    name: 'Analysis Result & Recommendations',
                    description: 'The analysis result and recommendations',
                    placeholder: 'The analysis result and recommendations will be displayed here\n\n\n\n',
                    multiline: true
                }
            ],
            notSelected: [
                {
                    type: 'text',
                    name: 'Error',
                    description: 'Error message',
                    placeholder: 'Error message will be displayed here\n\n\n\n',
                    multiline: true
                }
            ]
        },
    },
    '8ab13462-4a7f-4410-bfee-d5fe7b66452e3444444444': {
        id: '8ab13462-4a7f-4410-bfee-d5fe7b66452e',
        name: 'SuperPicth Analyzer by Timbal AI',
        lastRun: 'just now',
        description: longDesc,
        status: 'success',
        images: [
            'https://www.timbal.ai/images/icons/gmail.png',
            'https://www.timbal.ai/images/icons/mistral.png',
            'https://www.timbal.ai/images/icons/market.png',
            'https://www.timbal.ai/images/icons/linkedin.png',
        ],
        nodes: [
            {
                id: '1',
                type: 'customNode',
                data: {
                    label: 'Analyze PDF',
                    icon: 'https://www.timbal.ai/images/icons/mistral.png',
                    status: 'success',
                    stepType: 'Model',
                    inputs: [
                        { type: 'file', name: 'Pitch PDF', description: 'The PDF file to be analyzed' },
                        { type: 'file', name: 'Current Portfolio', description: 'The current portfolio in a file' },
                        { type: 'text', name: 'Error', description: 'Error message', placeholder: 'Error message will be displayed here\n\n\n\n', multiline: true },
                        { type: 'bool', name: 'Is Error', description: 'Is there an error?', placeholder: 'Is there an error?', initialValue: true },
                        { type: 'number', name: 'Number', description: 'Number', placeholder: 'Number' },
                        { type: 'text', name: 'Text', description: 'Text', placeholder: 'Text', initialValue: 'Initial Value' },
                        { type: 'slider', name: 'Date', description: 'Date', placeholder: 'Date', initialValue: 50, min: 0, max: 100, step: 1 },
                        {
                            type: 'dropdown', name: 'Dropdown', description: 'Dropdown', placeholder: 'Dropdown', options: [
                                { value: '1', label: 'Option 1' },
                                { value: '2', label: 'Option 2' },
                                { value: '3', label: 'Option 3' },
                            ]
                        },
                    ],
                    advanced: [
                        { type: 'text', name: 'Error', description: 'Error message', placeholder: 'Error message will be displayed here\n\n\n\n', multiline: true }
                    ],
                },
                position: { x: 0, y: 0 }
            },
            { id: '2', type: 'customNode', data: { label: 'Market Analysis', icon: 'https://www.timbal.ai/images/icons/market', status: 'success', stepType: 'Model' }, position: { x: 600, y: 0 } },
            { id: '3', type: 'customNode', data: { label: 'Web Scrapper', icon: 'https://www.timbal.ai/images/icons/download.png', status: 'success', stepType: 'Model' }, position: { x: 300, y: -100 } },
            { id: '4', type: 'customNode', data: { label: 'LinkedIn Scrapper', icon: 'https://www.timbal.ai/images/icons/linkedin.png', status: 'success', stepType: 'integration' }, position: { x: 600, y: -100 } },
            { id: '5', type: 'customNode', data: { label: 'Contrast Info', icon: 'https://www.timbal.ai/images/icons/meta.png', status: 'success', stepType: 'Model' }, position: { x: 900, y: -100 } },
            { id: '6', type: 'customNode', data: { label: 'Evaluate Oportunity', icon: 'https://www.timbal.ai/images/icons/brain.png', status: 'success', stepType: 'Model' }, position: { x: 1200, y: 0 } },
            { id: '7', type: 'customNode', data: { label: 'Current Portfolio', icon: 'https://www.timbal.ai/images/icons/sheets.png', status: 'success', stepType: 'Model' }, position: { x: 900, y: 100 } }
        ],
        edges: [
            { id: 'e1-2', source: '1', target: '2', type: 'smoothstep' },
            { id: 'e1-3', source: '1', target: '3', type: 'smoothstep' },
            { id: 'e2-6', source: '2', target: '6', type: 'smoothstep' },
            { id: 'e3-4', source: '3', target: '4', type: 'smoothstep' },
            { id: 'e4-5', source: '4', target: '5', type: 'smoothstep' },
            { id: 'e5-6', source: '5', target: '6', type: 'smoothstep' },
            { id: 'e7-6', source: '7', target: '6', type: 'smoothstep' },
        ],
        IO: {
            inputs: [
                {
                    type: 'file',
                    name: 'Pitch PDF',
                    description: 'The PDF file to be analyzed',
                },
                {
                    type: 'text',
                    name: 'Your Investment Thesis',
                    placeholder: 'Describe the investment thesis here \n\n\n\n',
                }
            ],
            outputs: [
                {
                    type: 'text',
                    name: 'Analysis Result & Recommendations',
                    description: 'The analysis result and recommendations',
                    placeholder: 'The analysis result and recommendations will be displayed here\n\n\n\n',
                    multiline: true
                }
            ],
            notSelected: [
                {
                    type: 'text',
                    name: 'Error',
                    description: 'Error message',
                    placeholder: 'Error message will be displayed here\n\n\n\n',
                    multiline: true
                }
            ]
        },
    },
    '8ab13462-4a7f-4410-bfee-d5fe7b66452e4': {
        id: '8ab13462-4a7f-4410-bfee-d5fe7b66452e',
        name: 'SuperPicth Analyzer by Timbal AI',
        lastRun: 'just now',
        description: longDesc,
        status: 'success',
        images: [
            'https://www.timbal.ai/images/icons/gmail.png',
            'https://www.timbal.ai/images/icons/mistral.png',
            'https://www.timbal.ai/images/icons/market.png',
            'https://www.timbal.ai/images/icons/linkedin.png',
        ],
        nodes: [
            {
                id: '1',
                type: 'customNode',
                data: {
                    label: 'Analyze PDF',
                    icon: 'https://www.timbal.ai/images/icons/mistral.png',
                    status: 'success',
                    stepType: 'Model',
                    inputs: [
                        { type: 'file', name: 'Pitch PDF', description: 'The PDF file to be analyzed' },
                        { type: 'file', name: 'Current Portfolio', description: 'The current portfolio in a file' },
                        { type: 'text', name: 'Error', description: 'Error message', placeholder: 'Error message will be displayed here\n\n\n\n', multiline: true },
                        { type: 'bool', name: 'Is Error', description: 'Is there an error?', placeholder: 'Is there an error?', initialValue: true },
                        { type: 'number', name: 'Number', description: 'Number', placeholder: 'Number' },
                        { type: 'text', name: 'Text', description: 'Text', placeholder: 'Text', initialValue: 'Initial Value' },
                        { type: 'slider', name: 'Date', description: 'Date', placeholder: 'Date', initialValue: 50, min: 0, max: 100, step: 1 },
                        {
                            type: 'dropdown', name: 'Dropdown', description: 'Dropdown', placeholder: 'Dropdown', options: [
                                { value: '1', label: 'Option 1' },
                                { value: '2', label: 'Option 2' },
                                { value: '3', label: 'Option 3' },
                            ]
                        },
                    ],
                    advanced: [
                        { type: 'text', name: 'Error', description: 'Error message', placeholder: 'Error message will be displayed here\n\n\n\n', multiline: true }
                    ],
                },
                position: { x: 0, y: 0 }
            },
            { id: '2', type: 'customNode', data: { label: 'Market Analysis', icon: 'https://www.timbal.ai/images/icons/market', status: 'success', stepType: 'Model' }, position: { x: 600, y: 0 } },
            { id: '3', type: 'customNode', data: { label: 'Web Scrapper', icon: 'https://www.timbal.ai/images/icons/download.png', status: 'success', stepType: 'Model' }, position: { x: 300, y: -100 } },
            { id: '4', type: 'customNode', data: { label: 'LinkedIn Scrapper', icon: 'https://www.timbal.ai/images/icons/linkedin.png', status: 'success', stepType: 'integration' }, position: { x: 600, y: -100 } },
            { id: '5', type: 'customNode', data: { label: 'Contrast Info', icon: 'https://www.timbal.ai/images/icons/meta.png', status: 'success', stepType: 'Model' }, position: { x: 900, y: -100 } },
            { id: '6', type: 'customNode', data: { label: 'Evaluate Oportunity', icon: 'https://www.timbal.ai/images/icons/brain.png', status: 'success', stepType: 'Model' }, position: { x: 1200, y: 0 } },
            { id: '7', type: 'customNode', data: { label: 'Current Portfolio', icon: 'https://www.timbal.ai/images/icons/sheets.png', status: 'success', stepType: 'Model' }, position: { x: 900, y: 100 } }
        ],
        edges: [
            { id: 'e1-2', source: '1', target: '2', type: 'smoothstep' },
            { id: 'e1-3', source: '1', target: '3', type: 'smoothstep' },
            { id: 'e2-6', source: '2', target: '6', type: 'smoothstep' },
            { id: 'e3-4', source: '3', target: '4', type: 'smoothstep' },
            { id: 'e4-5', source: '4', target: '5', type: 'smoothstep' },
            { id: 'e5-6', source: '5', target: '6', type: 'smoothstep' },
            { id: 'e7-6', source: '7', target: '6', type: 'smoothstep' },
        ],
        IO: {
            inputs: [
                {
                    type: 'file',
                    name: 'Pitch PDF',
                    description: 'The PDF file to be analyzed',
                },
                {
                    type: 'text',
                    name: 'Your Investment Thesis',
                    placeholder: 'Describe the investment thesis here \n\n\n\n',
                }
            ],
            outputs: [
                {
                    type: 'text',
                    name: 'Analysis Result & Recommendations',
                    description: 'The analysis result and recommendations',
                    placeholder: 'The analysis result and recommendations will be displayed here\n\n\n\n',
                    multiline: true
                }
            ],
            notSelected: [
                {
                    type: 'text',
                    name: 'Error',
                    description: 'Error message',
                    placeholder: 'Error message will be displayed here\n\n\n\n',
                    multiline: true
                }
            ]
        },
    },
    '8ab13462-4a7f-4410-bfee-d5fe7b66452e5': {
        id: '8ab13462-4a7f-4410-bfee-d5fe7b66452e',
        name: 'SuperPicth Analyzer by Timbal AI',
        lastRun: 'just now',
        description: longDesc,
        status: 'success',
        images: [
            'https://www.timbal.ai/images/icons/gmail.png',
            'https://www.timbal.ai/images/icons/mistral.png',
            'https://www.timbal.ai/images/icons/market.png',
            'https://www.timbal.ai/images/icons/linkedin.png',
        ],
        nodes: [
            {
                id: '1',
                type: 'customNode',
                data: {
                    label: 'Analyze PDF',
                    icon: 'https://www.timbal.ai/images/icons/mistral.png',
                    status: 'success',
                    stepType: 'Model',
                    inputs: [
                        { type: 'file', name: 'Pitch PDF', description: 'The PDF file to be analyzed' },
                        { type: 'file', name: 'Current Portfolio', description: 'The current portfolio in a file' },
                        { type: 'text', name: 'Error', description: 'Error message', placeholder: 'Error message will be displayed here\n\n\n\n', multiline: true },
                        { type: 'bool', name: 'Is Error', description: 'Is there an error?', placeholder: 'Is there an error?', initialValue: true },
                        { type: 'number', name: 'Number', description: 'Number', placeholder: 'Number' },
                        { type: 'text', name: 'Text', description: 'Text', placeholder: 'Text', initialValue: 'Initial Value' },
                        { type: 'slider', name: 'Date', description: 'Date', placeholder: 'Date', initialValue: 50, min: 0, max: 100, step: 1 },
                        {
                            type: 'dropdown', name: 'Dropdown', description: 'Dropdown', placeholder: 'Dropdown', options: [
                                { value: '1', label: 'Option 1' },
                                { value: '2', label: 'Option 2' },
                                { value: '3', label: 'Option 3' },
                            ]
                        },
                    ],
                    advanced: [
                        { type: 'text', name: 'Error', description: 'Error message', placeholder: 'Error message will be displayed here\n\n\n\n', multiline: true }
                    ],
                },
                position: { x: 0, y: 0 }
            },
            { id: '2', type: 'customNode', data: { label: 'Market Analysis', icon: 'https://www.timbal.ai/images/icons/market', status: 'success', stepType: 'Model' }, position: { x: 600, y: 0 } },
            { id: '3', type: 'customNode', data: { label: 'Web Scrapper', icon: 'https://www.timbal.ai/images/icons/download.png', status: 'success', stepType: 'Model' }, position: { x: 300, y: -100 } },
            { id: '4', type: 'customNode', data: { label: 'LinkedIn Scrapper', icon: 'https://www.timbal.ai/images/icons/linkedin.png', status: 'success', stepType: 'integration' }, position: { x: 600, y: -100 } },
            { id: '5', type: 'customNode', data: { label: 'Contrast Info', icon: 'https://www.timbal.ai/images/icons/meta.png', status: 'success', stepType: 'Model' }, position: { x: 900, y: -100 } },
            { id: '6', type: 'customNode', data: { label: 'Evaluate Oportunity', icon: 'https://www.timbal.ai/images/icons/brain.png', status: 'success', stepType: 'Model' }, position: { x: 1200, y: 0 } },
            { id: '7', type: 'customNode', data: { label: 'Current Portfolio', icon: 'https://www.timbal.ai/images/icons/sheets.png', status: 'success', stepType: 'Model' }, position: { x: 900, y: 100 } }
        ],
        edges: [
            { id: 'e1-2', source: '1', target: '2', type: 'smoothstep' },
            { id: 'e1-3', source: '1', target: '3', type: 'smoothstep' },
            { id: 'e2-6', source: '2', target: '6', type: 'smoothstep' },
            { id: 'e3-4', source: '3', target: '4', type: 'smoothstep' },
            { id: 'e4-5', source: '4', target: '5', type: 'smoothstep' },
            { id: 'e5-6', source: '5', target: '6', type: 'smoothstep' },
            { id: 'e7-6', source: '7', target: '6', type: 'smoothstep' },
        ],
        IO: {
            inputs: [
                {
                    type: 'file',
                    name: 'Pitch PDF',
                    description: 'The PDF file to be analyzed',
                },
                {
                    type: 'text',
                    name: 'Your Investment Thesis',
                    placeholder: 'Describe the investment thesis here \n\n\n\n',
                }
            ],
            outputs: [
                {
                    type: 'text',
                    name: 'Analysis Result & Recommendations',
                    description: 'The analysis result and recommendations',
                    placeholder: 'The analysis result and recommendations will be displayed here\n\n\n\n',
                    multiline: true
                }
            ],
            notSelected: [
                {
                    type: 'text',
                    name: 'Error',
                    description: 'Error message',
                    placeholder: 'Error message will be displayed here\n\n\n\n',
                    multiline: true
                }
            ]
        },
    },
    '8ab13462-4a7f-4410-bfee-d5fe7b66452e6': {
        id: '8ab13462-4a7f-4410-bfee-d5fe7b66452e',
        name: 'SuperPicth Analyzer by Timbal AI',
        lastRun: 'just now',
        description: longDesc,
        status: 'success',
        images: [
            'https://www.timbal.ai/images/icons/gmail.png',
            'https://www.timbal.ai/images/icons/mistral.png',
            'https://www.timbal.ai/images/icons/market.png',
            'https://www.timbal.ai/images/icons/linkedin.png',
        ],
        nodes: [
            {
                id: '1',
                type: 'customNode',
                data: {
                    label: 'Analyze PDF',
                    icon: 'https://www.timbal.ai/images/icons/mistral.png',
                    status: 'success',
                    stepType: 'Model',
                    inputs: [
                        { type: 'file', name: 'Pitch PDF', description: 'The PDF file to be analyzed' },
                        { type: 'file', name: 'Current Portfolio', description: 'The current portfolio in a file' },
                        { type: 'text', name: 'Error', description: 'Error message', placeholder: 'Error message will be displayed here\n\n\n\n', multiline: true },
                        { type: 'bool', name: 'Is Error', description: 'Is there an error?', placeholder: 'Is there an error?', initialValue: true },
                        { type: 'number', name: 'Number', description: 'Number', placeholder: 'Number' },
                        { type: 'text', name: 'Text', description: 'Text', placeholder: 'Text', initialValue: 'Initial Value' },
                        { type: 'slider', name: 'Date', description: 'Date', placeholder: 'Date', initialValue: 50, min: 0, max: 100, step: 1 },
                        {
                            type: 'dropdown', name: 'Dropdown', description: 'Dropdown', placeholder: 'Dropdown', options: [
                                { value: '1', label: 'Option 1' },
                                { value: '2', label: 'Option 2' },
                                { value: '3', label: 'Option 3' },
                            ]
                        },
                    ],
                    advanced: [
                        { type: 'text', name: 'Error', description: 'Error message', placeholder: 'Error message will be displayed here\n\n\n\n', multiline: true }
                    ],
                },
                position: { x: 0, y: 0 }
            },
            { id: '2', type: 'customNode', data: { label: 'Market Analysis', icon: 'https://www.timbal.ai/images/icons/market', status: 'success', stepType: 'Model' }, position: { x: 600, y: 0 } },
            { id: '3', type: 'customNode', data: { label: 'Web Scrapper', icon: 'https://www.timbal.ai/images/icons/download.png', status: 'success', stepType: 'Model' }, position: { x: 300, y: -100 } },
            { id: '4', type: 'customNode', data: { label: 'LinkedIn Scrapper', icon: 'https://www.timbal.ai/images/icons/linkedin.png', status: 'success', stepType: 'integration' }, position: { x: 600, y: -100 } },
            { id: '5', type: 'customNode', data: { label: 'Contrast Info', icon: 'https://www.timbal.ai/images/icons/meta.png', status: 'success', stepType: 'Model' }, position: { x: 900, y: -100 } },
            { id: '6', type: 'customNode', data: { label: 'Evaluate Oportunity', icon: 'https://www.timbal.ai/images/icons/brain.png', status: 'success', stepType: 'Model' }, position: { x: 1200, y: 0 } },
            { id: '7', type: 'customNode', data: { label: 'Current Portfolio', icon: 'https://www.timbal.ai/images/icons/sheets.png', status: 'success', stepType: 'Model' }, position: { x: 900, y: 100 } }
        ],
        edges: [
            { id: 'e1-2', source: '1', target: '2', type: 'smoothstep' },
            { id: 'e1-3', source: '1', target: '3', type: 'smoothstep' },
            { id: 'e2-6', source: '2', target: '6', type: 'smoothstep' },
            { id: 'e3-4', source: '3', target: '4', type: 'smoothstep' },
            { id: 'e4-5', source: '4', target: '5', type: 'smoothstep' },
            { id: 'e5-6', source: '5', target: '6', type: 'smoothstep' },
            { id: 'e7-6', source: '7', target: '6', type: 'smoothstep' },
        ],
        IO: {
            inputs: [
                {
                    type: 'file',
                    name: 'Pitch PDF',
                    description: 'The PDF file to be analyzed',
                },
                {
                    type: 'text',
                    name: 'Your Investment Thesis',
                    placeholder: 'Describe the investment thesis here \n\n\n\n',
                }
            ],
            outputs: [
                {
                    type: 'text',
                    name: 'Analysis Result & Recommendations',
                    description: 'The analysis result and recommendations',
                    placeholder: 'The analysis result and recommendations will be displayed here\n\n\n\n',
                    multiline: true
                }
            ],
            notSelected: [
                {
                    type: 'text',
                    name: 'Error',
                    description: 'Error message',
                    placeholder: 'Error message will be displayed here\n\n\n\n',
                    multiline: true
                }
            ]
        },
    },
};

export { defaultFlows };