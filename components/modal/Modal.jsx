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
                base: "modalBase",
                afterOpen: "modalAfterOpen",
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
            <div className={"closeButtonContainer"}>
                {/* <img role="close" onClick={props.hideModal} src={exit} alt="Close" /> */}
                <button className="modal-close-button" onClick={props.hideModal}>X</button>
            </div>
            <div className="modalTitleStyle">{props.modalTitle ? props.modalTitle : "Modal title"}</div>
            {props.children}
        </ReactModal>
    );
};

export default Modal;
