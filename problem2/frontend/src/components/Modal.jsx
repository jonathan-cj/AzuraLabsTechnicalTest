
const Modal = (props) => {
	const { children, closeModal } = props;

	const handleParentClick = (e) => {
		if (e.target.id === 'background') {
			closeModal();
		}
	};

	return (
		<div onClick={handleParentClick} id="background" className="fixed top-0 left-0 right-0 bottom-0 h-screen w-screen z-50 flex justify-center items-center bg-primary-1000 bg-opacity-70">
			<div className="bg-primary-0 shadow-lg rounded-lg w-max p-6">
				{children}
			</div>
		</div>
	);
};

export default Modal;
