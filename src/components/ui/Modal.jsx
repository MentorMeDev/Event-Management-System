function Modal({ isOpen, title, onClose, children, footer }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/70 p-4">
      <div className="w-full max-w-2xl rounded-3xl border border-white/10 bg-slate-900 text-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
          <h3 className="text-xl font-bold">{title}</h3>
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl bg-white/10 px-3 py-1 text-sm hover:bg-white/20"
          >
            Close
          </button>
        </div>

        <div className="max-h-[70vh] overflow-y-auto px-6 py-5">{children}</div>

        {footer ? (
          <div className="flex justify-end gap-3 border-t border-white/10 px-6 py-4">
            {footer}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Modal;