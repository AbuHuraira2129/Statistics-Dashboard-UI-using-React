import "../CSS/SideMenu.css";
import Pic from "../Assets/ProfilePic.png";

const SideMenu = () => {
  return (
    <div className="Side-Menu">
      {/* Profile Picture with Status */}
      <div className="ProfilePic">
        <img src={Pic} alt="ProfilePicture" />
        <div className="circle-status"></div>
      </div>

      {/* Menu */}
      <div className="menu">
        <div className="item stats">
          <button className="active">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.24506 18.5H5.63069V15H4.24506V18.5ZM6.61028 20.5H3.26547C2.72424 20.5 2.28587 20.055 2.28587 19.5V14C2.28587 13.45 2.72424 13 3.26547 13H6.61028C7.15102 13 7.58987 13.45 7.58987 14V19.5C7.58987 20.055 7.15102 20.5 6.61028 20.5Z"
              fill="#B8C5D3"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.3887 18.5H12.7744V8.5H11.3887V18.5ZM13.754 20.5H10.4091C9.86841 20.5 9.42955 20.055 9.42955 19.5V7.5C9.42955 6.95 9.86841 6.5 10.4091 6.5H13.754C14.2952 6.5 14.7336 6.95 14.7336 7.5V19.5C14.7336 20.055 14.2952 20.5 13.754 20.5Z"
              fill="#B8C5D3"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18.5329 18.5H19.9185V2H18.5329V18.5ZM20.8981 20.5H17.5533C17.0126 20.5 16.5737 20.055 16.5737 19.5V1C16.5737 0.45 17.0126 0 17.5533 0H20.8981C21.4389 0 21.8777 0.45 21.8777 1V19.5C21.8777 20.055 21.4389 20.5 20.8981 20.5Z"
              fill="#B8C5D3"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M22.8573 24H1.30628C0.765548 24 0.326691 23.555 0.326691 23C0.326691 22.45 0.765548 22 1.30628 22H22.8573C23.398 22 23.8369 22.45 23.8369 23C23.8369 23.555 23.398 24 22.8573 24Z"
              fill="#B8C5D3"
            />
          </svg>
          </button>
        </div>
        <hr />
        <div className="item maps">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="24"
            viewBox="0 0 21 24"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.0485 12H2.0835V5H16.0485L18.3815 8.5L16.0485 12ZM20.4155 7.945L17.4155 3.445C17.23 3.17 16.918 3 16.5835 3H10.3335V1C10.3335 0.45 9.8855 0 9.3335 0C8.7815 0 8.3335 0.45 8.3335 1V3H1.0835C0.531496 3 0.0834961 3.45 0.0834961 4V13C0.0834961 13.555 0.531496 14 1.0835 14H8.3335V22H6.974C6.422 22 5.974 22.45 5.974 23C5.974 23.555 6.422 24 6.974 24H11.693C12.245 24 12.693 23.555 12.693 23C12.693 22.45 12.245 22 11.693 22H10.3335V14H16.5835C16.918 14 17.23 13.835 17.4155 13.555L20.4155 9.055C20.6395 8.72 20.6395 8.28 20.4155 7.945Z"
              fill="#B8C5D3"
            />
          </svg>
        </div>
        <hr />
        <div className="item shopping">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="20"
            viewBox="0 0 24 20"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18.6529 18H5.51069L4.0124 11.5H20.1512L18.6529 18ZM2.28587 9.5H21.8777V7H2.28587V9.5ZM22.8573 5H21.2145L15.1038 0.500004C14.665 0.180004 14.0522 0.280004 13.7363 0.730004C13.4199 1.175 13.5189 1.8 13.9577 2.125L17.8653 5H6.29828L10.2059 2.125C10.6447 1.8 10.7437 1.175 10.4273 0.730004C10.1113 0.280004 9.4991 0.180004 9.05975 0.500004L2.94906 5H1.30628C0.765548 5 0.326691 5.45 0.326691 6V10.5C0.326691 11.055 0.765548 11.5 1.30628 11.5H1.99983L3.78122 19.23C3.88555 19.68 4.28032 20 4.73485 20H19.4287C19.8833 20 20.278 19.68 20.3824 19.23L22.1638 11.5H22.8573C23.398 11.5 23.8369 11.055 23.8369 10.5V6C23.8369 5.45 23.398 5 22.8573 5Z"
              fill="#B8C5D3"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.6124 16.75C11.0185 16.75 11.3471 16.415 11.3471 16V13.5C11.3471 13.085 11.0185 12.75 10.6124 12.75C10.2064 12.75 9.87772 13.085 9.87772 13.5V16C9.87772 16.415 10.2064 16.75 10.6124 16.75Z"
              fill="#B8C5D3"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.5512 16.75C13.9572 16.75 14.2859 16.415 14.2859 16V13.5C14.2859 13.085 13.9572 12.75 13.5512 12.75C13.1451 12.75 12.8165 13.085 12.8165 13.5V16C12.8165 16.415 13.1451 16.75 13.5512 16.75Z"
              fill="#B8C5D3"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.49 16.75C16.896 16.75 17.2247 16.415 17.2247 16V13.5C17.2247 13.085 16.896 12.75 16.49 12.75C16.0839 12.75 15.7553 13.085 15.7553 13.5V16C15.7553 16.415 16.0839 16.75 16.49 16.75Z"
              fill="#B8C5D3"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.67363 16.75C8.07967 16.75 8.40832 16.415 8.40832 16V13.5C8.40832 13.085 8.07967 12.75 7.67363 12.75C7.26759 12.75 6.93893 13.085 6.93893 13.5V16C6.93893 16.415 7.26759 16.75 7.67363 16.75Z"
              fill="#B8C5D3"
            />
          </svg>
        </div>
        <hr />
        <div className="item Messages">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="21"
            viewBox="0 0 24 21"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M21.8777 17.72L19.6393 15.665C19.4581 15.495 19.223 15.405 18.983 15.405H6.7822V13.405H18.361C18.8998 13.405 19.3406 12.96 19.3406 12.405V6.33002H21.8777V17.72ZM4.52424 11.665L2.28587 13.72V2.33002H17.3814V11.405H5.18057C5.05812 11.405 4.93567 11.43 4.82302 11.475C4.71526 11.52 4.6124 11.58 4.52424 11.665ZM22.8573 4.33002H19.3406V1.33002C19.3406 0.775017 18.8998 0.330017 18.361 0.330017H1.30628C0.767507 0.330017 0.326691 0.775017 0.326691 1.33002V15.965C0.326691 16.36 0.551997 16.72 0.909548 16.88C1.03689 16.94 1.16914 16.965 1.30628 16.965C1.54138 16.965 1.77649 16.88 1.96261 16.71L4.82302 14.08V16.405C4.82302 16.96 5.26383 17.405 5.80261 17.405H18.6059L22.201 20.71C22.3871 20.88 22.6222 20.965 22.8573 20.965C22.9944 20.965 23.1267 20.94 23.254 20.88C23.6116 20.72 23.8369 20.36 23.8369 19.965V5.33002C23.8369 4.77502 23.3961 4.33002 22.8573 4.33002Z"
              fill="#B8C5D3"
            />
          </svg>
        </div>
        <hr />
        <div className="item Files">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="24"
            viewBox="0 0 18 24"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.16233 17.6331V1.95967H11.0272V5.88686C11.0272 6.42808 11.4631 6.86645 12.0002 6.86645H15.8921V17.6331H6.16233ZM12.4867 21.5515H2.27044V5.87804H4.21639V18.6127C4.21639 19.154 4.65228 19.5923 5.18936 19.5923H12.4867V21.5515ZM12.9731 3.3453L14.5245 4.90726H12.9731V3.3453ZM17.5529 5.18547L12.6881 0.287509C12.5056 0.103835 12.258 0.000488281 12.0002 0.000488281H5.18936C4.65228 0.000488281 4.21639 0.439345 4.21639 0.98008V3.91886H1.29747C0.760385 3.91886 0.324493 4.35771 0.324493 4.89845V22.5311C0.324493 23.0723 0.760385 23.5107 1.29747 23.5107H13.4596C13.9967 23.5107 14.4326 23.0723 14.4326 22.5311V19.5923H16.865C17.4021 19.5923 17.838 19.154 17.838 18.6127V5.87804C17.838 5.61845 17.7354 5.36914 17.5529 5.18547Z"
              fill="#B8C5D3"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.59477 10.0413H11.0272C11.4305 10.0413 11.7569 9.71263 11.7569 9.30659C11.7569 8.90104 11.4305 8.5719 11.0272 8.5719H8.59477C8.19147 8.5719 7.86504 8.90104 7.86504 9.30659C7.86504 9.71263 8.19147 10.0413 8.59477 10.0413Z"
              fill="#B8C5D3"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.4596 11.5107H8.59477C8.19147 11.5107 7.86504 11.8398 7.86504 12.2454C7.86504 12.6514 8.19147 12.9801 8.59477 12.9801H13.4596C13.8629 12.9801 14.1894 12.6514 14.1894 12.2454C14.1894 11.8398 13.8629 11.5107 13.4596 11.5107Z"
              fill="#B8C5D3"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.4596 14.4495H8.59477C8.19147 14.4495 7.86504 14.7786 7.86504 15.1842C7.86504 15.5902 8.19147 15.9189 8.59477 15.9189H13.4596C13.8629 15.9189 14.1894 15.5902 14.1894 15.1842C14.1894 14.7786 13.8629 14.4495 13.4596 14.4495Z"
              fill="#B8C5D3"
            />
          </svg>
        </div>
        <hr />
        <div className="item settings">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="24"
            viewBox="0 0 23 24"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.09277 16.634C3.09277 16.634 3.09277 16.634 3.09277 16.6344C3.09277 16.634 3.09277 16.634 3.09277 16.634ZM3.11235 16.6624V16.6673C3.11235 16.6677 3.11235 16.6677 3.11235 16.6677C3.11235 16.6677 3.11235 16.6658 3.11235 16.6624ZM10.0955 21.4369C11.0694 21.5897 12.097 21.5897 13.0709 21.4369V19.7657C13.0709 19.3357 13.3498 18.9561 13.7609 18.8292C14.8032 18.5079 15.7526 17.9593 16.5796 17.1992C16.8928 16.9082 17.3626 16.8573 17.7345 17.0738L19.183 17.9206C19.4668 17.5758 19.7213 17.2124 19.9513 16.8338C20.01 16.73 20.0736 16.6183 20.1421 16.5061C20.3477 16.1349 20.5336 15.7469 20.6902 15.3482L19.2368 14.5009C18.8698 14.2844 18.6789 13.8514 18.7768 13.4331C18.9089 12.8645 18.9775 12.3002 18.9775 11.7556C18.9775 11.2237 18.9138 10.6731 18.7866 10.1202C18.6936 9.70138 18.8845 9.26938 19.2564 9.05534L20.7098 8.21828C20.5434 7.77893 20.3379 7.35085 20.103 6.93942C20.0981 6.93256 20.0785 6.89387 20.0736 6.88701C20.0638 6.87036 20.0443 6.83852 20.0345 6.82089C19.7947 6.41044 19.5255 6.01469 19.2221 5.63901L17.7687 6.47607C17.3968 6.69012 16.927 6.63673 16.6138 6.34383C15.7917 5.57877 14.8032 5.00375 13.7609 4.68195C13.3498 4.5551 13.0709 4.1755 13.0709 3.74546V2.07477C12.097 1.92195 11.0694 1.92195 10.0955 2.07477V3.74546C10.0955 4.1755 9.81171 4.5551 9.40064 4.68195C8.3583 5.00375 7.40894 5.55232 6.58681 6.31248C6.26873 6.60342 5.79894 6.65436 5.42703 6.43787L3.97852 5.59101C3.69958 5.93583 3.44511 6.29975 3.21511 6.67787C2.92149 7.1515 2.67681 7.64865 2.47618 8.16342L3.92469 9.01077C4.2966 9.22726 4.48256 9.66024 4.38469 10.0785C4.25256 10.6472 4.18894 11.2114 4.18894 11.7556C4.18894 12.288 4.25256 12.8385 4.3749 13.3915C4.46788 13.8103 4.28192 14.2423 3.91001 14.4563L2.45171 15.2934C2.59852 15.6661 2.76979 16.0389 2.96554 16.4077L3.10745 16.6565C3.11235 16.6677 3.12213 16.6795 3.12703 16.6908C3.36681 17.1012 3.64086 17.497 3.93937 17.8726L5.39767 17.0356C5.76958 16.8215 6.23447 16.8749 6.55256 17.1678C7.36979 17.9329 8.3583 18.5079 9.40064 18.8292C9.81171 18.9561 10.0955 19.3357 10.0955 19.7657V21.4369ZM11.5832 23.5107C10.6632 23.5107 9.75788 23.4034 8.88192 23.1913C8.44639 23.0846 8.13809 22.6917 8.13809 22.2397V20.4578C7.29149 20.1203 6.49384 19.6535 5.76958 19.08L4.2183 19.9729C3.82681 20.1992 3.32766 20.1252 3.01937 19.7941C2.41745 19.152 1.88894 18.4482 1.45341 17.7012C1.42894 17.666 1.40447 17.6277 1.3849 17.5817L1.24298 17.3412C0.851495 16.6051 0.543197 15.8606 0.327878 15.119C0.200644 14.6846 0.391495 14.2207 0.782984 13.9954L2.32937 13.104C2.26575 12.6504 2.23149 12.1993 2.23149 11.7556C2.23149 11.2952 2.26575 10.826 2.33915 10.3533L0.792771 9.45012C0.401282 9.22187 0.220218 8.75461 0.347452 8.32065C0.631282 7.38465 1.03256 6.48881 1.54149 5.65861C1.97213 4.94644 2.48596 4.27395 3.0683 3.66318C3.38149 3.33452 3.87575 3.26301 4.26724 3.49224L5.81852 4.39542C6.52809 3.83265 7.30618 3.38301 8.13809 3.05289V1.27199C8.13809 0.819912 8.44639 0.427095 8.88192 0.32032C10.6289 -0.103844 12.5375 -0.103844 14.2796 0.32032C14.72 0.427095 15.0283 0.819912 15.0283 1.27199V3.05387C15.87 3.39134 16.6726 3.85763 17.3919 4.43167L18.9432 3.53877C19.3396 3.31199 19.8338 3.38644 20.147 3.71754C20.7489 4.36114 21.2775 5.06644 21.713 5.81485C21.7423 5.86089 21.7717 5.9084 21.7962 5.95542C22.2415 6.7342 22.5889 7.54971 22.8336 8.39118C22.9609 8.82563 22.7749 9.29044 22.3834 9.51624L20.8321 10.4077C20.9006 10.8612 20.9349 11.3123 20.9349 11.7556C20.9349 12.2165 20.8958 12.6857 20.8223 13.1584L22.3687 14.0615C22.7602 14.2898 22.9462 14.7561 22.814 15.1895C22.5792 15.9796 22.2513 16.7481 21.8402 17.4749C21.7668 17.6062 21.6983 17.7277 21.6249 17.8447C21.1894 18.5652 20.6755 19.2382 20.0981 19.848C19.7849 20.1771 19.2857 20.2477 18.8943 20.0189L17.3479 19.1162C16.6334 19.679 15.8602 20.1286 15.0283 20.4588V22.2397C15.0283 22.6917 14.72 23.0846 14.2796 23.1913C13.4085 23.4034 12.4983 23.5107 11.5832 23.5107Z"
              fill="#B8C5D3"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.5832 9.32718C10.2423 9.32718 9.15597 10.417 9.15597 11.7556C9.15597 13.0947 10.2423 14.1845 11.5832 14.1845C12.9192 14.1845 14.0104 13.0947 14.0104 11.7556C14.0104 10.417 12.9192 9.32718 11.5832 9.32718ZM11.5832 15.6539C9.4349 15.6539 7.68788 13.9053 7.68788 11.7556C7.68788 9.60636 9.4349 7.85779 11.5832 7.85779C13.7315 7.85779 15.4785 9.60636 15.4785 11.7556C15.4785 13.9053 13.7315 15.6539 11.5832 15.6539Z"
              fill="#B8C5D3"
            />
          </svg>
        </div>
      </div>

      {/* Add New Button */}
      <div className="Add-New">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            class="bi bi-plus"
            viewBox="0 0 16 16"
          >
            {" "}
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />{" "}
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SideMenu;