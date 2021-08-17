import React from "react";
import "./style.css";

class Toast extends React.Component {
  constructor(props) {
    super(props);
    this.toastElement = React.createRef();
  }

  handleCloseToast = () => {
    const toast = this.toastElement.current;
    toast.style.opacity = "0";
    setTimeout(() => {
      toast.style.display = "none";
    }, 600);
  };

//   componentDidMount() {
//     const toast = this.toastElement.current;
//     toast.style.opacity = "0";
//     setTimeout(() => {

//       toast.style.display = "none";
//     }, 2000);
//   }

  render() {
    const { toastType } = this.props;
    console.log(toastType);
    return toastType === "success" || toastType === "losing" ? (
      <div class={`toast toast-${toastType}`} ref={this.toastElement}>
        <div class="toast-bullet"></div>
        <div class="toast-content">
          <p class="toast-title">عملیات موفق</p>
          <p class="toast-message">رمز عبور با موفقیت تغییر کرد.</p>
        </div>
        <div class="toast-close" onClick={this.handleCloseToast}>
          &times;
        </div>
      </div>
    ) : null;
  }
}

export default Toast;
