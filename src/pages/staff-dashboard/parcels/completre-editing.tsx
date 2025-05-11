
import * as Dialog from '@radix-ui/react-dialog';
import { RefreshCw, X } from 'lucide-react';
import React from 'react';

interface StatusUpdateDialogProps {
  open: boolean;
  status: string;
  onClose: () => void;
}

export default function StatusUpdateDialog({
  open,
  status,
  onClose,
}: StatusUpdateDialogProps) {
  return (
    <Dialog.Root open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-30 z-40" />
        <Dialog.Content
          className="fixed top-1/2 left-1/2 z-50 w-[90vw] max-w-md -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-xl focus:outline-none"
          aria-describedby="status-update-description"
        >
          <div className="relative p-6">
            {/* Close Button */}
            <Dialog.Close asChild>
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                aria-label="Close"
              >
                <X className="h-6 w-6" />
              </button>
            </Dialog.Close>

            {/* Content */}
            <div className="flex flex-col items-center">
              <div className="mb-6">
                <RefreshCw className="h-10 w-10 text-black animate-spin" />
              </div>

              {/* Timeline */}
              <div className="flex items-center justify-center w-full mb-6">
                {[1, 2, 3, 4, 5].map((step) => (
                  <div key={step} className="flex items-center">
                    <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        fill="none"
                        stroke="white"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    {step < 5 && <div className="w-10 h-0.5 bg-green-400" />}
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-center mb-2">
                Update Successful
              </h2>
              <p className="text-center text-gray-600">
                The parcel status has changed and is now{' '}
                <span
                  className={
                    status === 'delivered'
                      ? 'text-green-600 font-semibold'
                      : 'text-blue-600 font-semibold'
                  }
                >
                  {status}
                </span>
                .
              </p>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
