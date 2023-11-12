import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

const ParentComponent = ({ children, hide }) => {
    return (
        <div style={{ display: hide ? 'none' : 'block', border: '1px black solid', margin: '5px' }}>
            {children}
        </div>
    )
};

export function usePrint(Comp, { hide = true } = {}) {
    const componentRef = useRef();

    const startPrint = useReactToPrint({
        content: () => componentRef.current,
        onBeforeGetContent: () => {
            console.log('onBeforeGetContent');
        },
        onAfterPrint: () => {
            console.log('onAfterPrint');
        },
        onBeforePrint: () => {
            console.log('onBeforePrint');
        },
        onAfterGetContent: () => {
            console.log('onAfterGetContent');
        },
        onPrintError: () => {
            console.log('onPrintError');
        },
        // pageStyle: `
        //     @page {
        //         size: 80mm 3276mm;
        //         margin: 0.5in;
        //     }
        //     @media print {
        //         body {
        //             margin: 0;
        //             padding: 1rem;
        //         }
        //     }
        // `,
    });

    const preview = <ParentComponent hide={hide}><Comp ref={componentRef} /></ParentComponent>;

    return { startPrint, preview };
}
