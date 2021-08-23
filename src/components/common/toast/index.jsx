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

  render() {
    const { toastType } = this.props;
    return (
      <div class={`toast toast-${toastType}`} ref={this.toastElement}>
        <div class="toast-bullet"></div>
        <div class="toast-content">
          <p class="toast-title">
            {toastType === "success" ? "عملیات موفق" : "خطا"}
          </p>
          <p class="toast-message">
            {toastType === "success"
              ? "محصول با موفقیت به سبد خرید اضافه شد"
              : "این محصول در سبد خرید وجود دارد"}
          </p>
        </div>
        <div class="toast-close" onClick={this.handleCloseToast}>
          &times;
        </div>
      </div>
    );
  }
}

export default Toast;
