"use client";
import { EventModalProps, ModalProps } from "@/types";
import Image from "next/image";
import { useEffect } from "react";
import Modal from "react-modal";

function RegistrationSuccessModal({
  isOpen,
  setIsOpen,
  type,
}: EventModalProps) {
  return (
    <Modal
      appElement={document.getElementById("__next") as HTMLElement}
      ariaHideApp={false}
      isOpen={isOpen}
      className="modal"
      overlayClassName="backdrop"
      onRequestClose={() => setIsOpen(false)}
      shouldCloseOnOverlayClick={false}
    >
      <div className="p-5 lg:p-[2.75rem] h-fit w-full md:w-[34.5rem] relative flex flex-col items-center">
        <div className="w-[6.25rem] md:w-[150px]">
          <Image
            src={
              type === "success"
                ? "/images/events-webinars/event-registration-success.svg"
                : "/images/events-webinars/cancel-event.svg"
            }
            alt={
              type === "success"
                ? "successful-event-registration"
                : "cancel-event-registration"
            }
            width={150}
            height={151}
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-black text-xl lg:text-2xl font-medium lg:font-semibold text-center px-12 mt-8">
          {type === "success"
            ? "Success! You’ve Registered for the Event"
            : "Are you sure you want to cancel registration ?"}
        </p>
        <p className="text-black/70 text-base leading-7 text-center mt-3">
          {type === "success"
            ? " Thank you for registering for Interactive tools for classroom engagement. You’ll receive a confirmation email shortly with event details and a reminder closer to the date. We look forward to seeing you there!"
            : "By canceling, you will no longer receive reminders or have access to the event resources. You can re-register at any time if your plans change"}
        </p>
        {type === "success" ? (
          <button
            onClick={() => setIsOpen(false)}
            className="bg-[#003] rounded-[2rem] lg:rounded-lg w-full md:w-[25.125rem] h-[3.375rem] shadow-[0px,2px,2px,1px,rgba(46,64,87,0.25)] text-white text-base lg:text-xl font-normal lg:font-medium mt-4 lg:mt-8"
          >
            Back to home
          </button>
        ) : (
          <div className="grid md:grid-cols-2 gap-4 lg:gap-10 w-full mt-4 lg:mt-10">
            <button
              onClick={() => setIsOpen(false)}
              className="border border-[#2E4057] text-[#003] rounded-[2rem] lg:rounded-lg w-full h-[3.375rem] shadow-[0px,2px,2px,1px,rgba(46,64,87,0.25)] text-base lg:text-xl font-normal lg:font-medium"
            >
              No
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="bg-[#003] rounded-[2rem] lg:rounded-lg w-full h-[3.375rem] shadow-[0px,2px,2px,1px,rgba(46,64,87,0.25)] text-white text-base lg:text-xl font-normal lg:font-medium"
            >
              Yes
            </button>
          </div>
        )}
      </div>
    </Modal>
  );
}

export default RegistrationSuccessModal;
