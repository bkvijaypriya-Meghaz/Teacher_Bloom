import * as React from "react";
import { useEffect } from "react";
import ReactModal from "react-modal";

const Modal = (props) => {
    const modalTitleStyle = "standardModalTitle";
    const setBodyScrolling = (currentScrollingState) => {
        const body = document.body;
        body.classList.remove(currentScrollingState ? "bodyStopScroll" : "bodyScroll");
        body.classList.add(currentScrollingState ? "bodyScroll" : "bodyStopScroll");
    };

    useEffect(() => {
        if (props.isOpen) {
            setBodyScrolling(false);
        } else {
            setBodyScrolling(true);
        }
        return function cleanup() {
            setBodyScrolling(true);
        };
    }, [props.isOpen]);

    return (
        <ReactModal
            ariaHideApp={false}
            isOpen={props.isOpen}
            onRequestClose={props.hideModal}
            className={{
                base: "",
                afterOpen: "modal-dialog modal-lg",
                beforeClose: "modalBeforeClose",
            }}
            overlayClassName={{
                base: "overlay",
                afterOpen: "",
                beforeClose: "overlayBeforeClose",
            }}
            shouldCloseOnOverlayClick={false}
            closeTimeoutMS={parseInt("animationDuration", 10)}
        >
            <div className="modal-content">
            <div className="modal-header">
            <div className="modal-title font-h5">{props.modalTitle ? props.modalTitle : "Modal title"}</div>
            <div className={""}>
                {/* <img role="close" onClick={props.hideModal} src={exit} alt="Close" /> */}
                <button className="close" aria-label="Close" data-dismiss="modal" onClick={props.hideModal}>
                <span aria-hidden='true'>x</span>    
                </button>
            </div>
            </div>
            {props.children}
            </div>
        </ReactModal>
    );
};

export default Modal;
