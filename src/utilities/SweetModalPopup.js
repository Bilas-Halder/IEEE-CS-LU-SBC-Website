import Swal from "sweetalert2";

export const SweetModalPopup = (props) => {
    return Swal.fire({
        ...props,
    });
};
