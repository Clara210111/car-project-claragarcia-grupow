import { Component } from "react";
import "./NavbarStyles.css";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <>
        <div className="navbar-container">
          <a href="index.html" className="logo-link">
            <svg width="100px" height="100px" viewBox="2.5 2.5 295 295">
              <path
                d="M297.5 149.998c0 81.465-66.039 147.502-147.5 147.502-81.462 0-147.5-66.037-147.5-147.502C2.5 68.539 68.538 2.5 150 2.5c81.461 0 147.5 66.039 147.5 147.498"
                fill="#231f20"
              />

              <path
                d="M292.324 149.998c0 78.608-63.721 142.327-142.325 142.327-78.605 0-142.327-63.719-142.327-142.327C7.672 71.396 71.395 7.675 150 7.675c78.604 0 142.324 63.721 142.324 142.323"
                fill="#bdbcbc"
              />

              <path
                d="M35.532 78.314c0 .118-15.791 2.52-15.775 2.595.077.392-.818 81.232 13.603 77.164 9.495-4.468 4.386-57.143 4.386-50.058 0 9.875.959 26.072 4.748 51.511 4.27 28.654 2.47 32.225 4.461 38.396-4.632-4.498-11.838-6.522-11.838-6.522l10.218 34.537 7.525-.077s.108-2.32.207-2.43c.203-.002 7.433.535 12.4 9.626 28.744 52.607 104.42 32.378 84.61 33.519l31.183-3.754C89.932 278.445 72.8 236.336 68.208 227.929c-2.877-4.216-11.148-8.633-16.348-6.118 0 0 12.692.507 12.128-2.858 3.966 3.852-9.862-6.234-9.862-6.234l.696 2.187c2.145.217 1.179-2.099 3.438-2.477l-2.804-1.284c-.359-.44 1.558-2.729-5.289-48.679-3.762-25.247-3.003-44.902-3.003-54.683 0-9.476-.619-10.146-.601-10.216l-5.565-3.635-1.067-.216c-1.534-.312-3.054-.803-3.713-1.168.342-.509.539-1.187.539-2.306 0-1.083-.116-2.494-.267-4.316-.199-2.438-.101-11.172-.438-8.254-17.733 153.9 6.814-17.226 3.799-13.938l1.725-1.954c8.353-9.642 37.533-32.16 112.825-33.92 79.621-1.866 79.982 27.217 80.255 27.642l20.625 10.216c-.271-.437-27.062-44.9-107.92-43.007C71.164 24.495 48.545 50.596 40.03 60.424l-1.684 1.912c-3.5 3.818-7.518 3.853-7.518 9.478 0 3.004-3.367 7.005-3.162 9.489 9.83 17.267 6.437 8.732 7.866-2.989zm217.734-7.403c-1.738.746-1.475 3.564-1.113 7.462.266 2.905.573 6.198 0 8.497l1.988.501c.658-2.639.332-6.118.05-9.189-.179-1.952-.456-4.906-.04-5.43.05.067.624 21.993 5.143 27.22 7.185 8.318 3.602 3.532 3.602 18.027 0 7.145 5.345 15.473 5.132 18.389-2.662-3.371-3.419-12.042-4.097-19.82-.793-9.057-1.471-16.876-4.691-19.474 3.969-3.481-9.825-21.72-8.883-9.369.648 4.32-1.465-9.7-4.533-14.473-9.396-14.625-28.865-31.713-96.515-34.062-62.015-2.153-92.75 23.301-100.65 31.066l1.026-1.771-10.077-5.194-2.851 30.17 4.313-6.807s6.962-12.625 7.09-12.921c1.087-1.281 30.472-34.934 101.076-32.482 75.26 2.612 89 23.991 94.87 33.12 2.826 4.402 3.568 9.321 4.227 13.661.86 5.716 1.682 11.113 8.1 10.25.59-.077 1.074.055 1.525.42 2.543 2.049 3.246 10.181 3.934 18.043.9 10.403 1.762 20.227 6.541 22.635l1.332.672.143-1.495c.18-1.909 4.301-46.877-8.432-61.62-5.014-5.805-6.861-6.608-8.21-6.026zm27.22 37.274a84.499 84.499 0 0 0-5.77-17.362c1.446 3.333 3.757 9.274 5.77 17.362zm-5.769-17.362a65.655 65.655 0 0 0-.9-2.008c.331.672.598 1.337.9 2.008zm-6.413-14.888c16.825 16.224 13.806 58.087 13.806 58.087l-8.184-9.509v40.562l-5.666 11.406c-10.076 53.873-33.997 101.408-127.804 98.872-93.804-2.535-108.282-52.604-117.097-100.138-8.814-47.533 3.777-99.504 3.777-99.504-27.702 82.391 5.038 144.502 5.038 144.502s15.737 58.308 112.691 57.676c96.949-.633 112.062-54.506 112.062-54.506l1.762 13.598s22.52-20.601 29.443-63.699c3.509-21.818-10.05-87.92-19.828-97.347zm5.512 12.88c-.326-.685-.525-1.062-.525-1.062.184.356.352.71.525 1.062"
                fill="#231f20"
              />

              <g transform="matrix(.49485 0 0 -.49485 -261.408 458.006)">
                <defs>
                  <path
                    id="a"
                    d="M1094.29 667.165c.101-1.012.221-1.966.332-2.984 3.268-32.552 4.767-23.841-.332 2.984zM607.449 803.749s25.906 23.892 44.403 41.494c.001 0-24.667-13.828-44.403-41.494zm-6.894-317.058c14.668-29.588 29.101-48.843 29.101-48.843s-13.754 20.747-29.101 48.843zm480.497 284.368l-4.821 14.047 43.051-15.304-41.651 21.347 42.3 25.102-46.488-19.06 7.44 46.485-15.093-44.904-10.939 3.09c-22.941 34.107-54.46 51.176-94.119 70.2-73.72 35.372-171.977 25.992-171.977 25.992s115.999-1.476 204.73-54.071c18.327-10.862 33.605-25.925 46.287-42.948l-19.15-1.056 21.949-2.8a219.328 219.328 0 0 0 5.991-8.89l-25.481-14.72 27.49 11.541a264.99 264.99 0 0 0 8.052-13.976l-10.87-34.028 12.847 30.285c19.042-36.827 29.072-75.95 33.69-100.226-5.329 50.816-14.629 87.039-27.771 114.21l.961 2.256s48.099-62.868 39.471-165.977c-8.632-103.109-33.3-139.574-57.972-164.722l-1.228 12.577s-35.763-106.886-213.364-104.366c-177.604 2.518-191.17 60.35-191.17 60.35l-9.866 5.04s-41.931 32.682-67.832 119.449c-25.903 86.761-1.235 157.176-1.235 157.176s-13.565-57.84-3.698-116.937c5.112-30.626 23.46-69.325 39.968-99.529-12.117 24.431-24.402 55.908-28.867 89.47-9.872 74.188-7.403 124.483 4.929 162.202 12.332 37.719 19.735 54.071 19.735 54.071s-51.798-60.36-53.032-188.613c-1.234-128.259 107.297-216.274 155.396-235.137 48.101-18.86 199.801-44.004 291.065 20.117 91.271 64.129 85.101 80.471 114.7 139.578 29.61 59.097 17.272 178.55-23.428 242.679zm-21.601 23.52c-.099.164-.189.328-.29.484l.922-.116-.632-.368zm4.239-7.57c-.519.983-1.038 1.987-1.569 2.948l2.899 1.22-1.33-4.168zm-434.034 5.425c7.396 12.575 45.629 35.208 45.629 35.208s-20.969-12.579-44.398-40.241c-23.438-27.66 8.634 2.516 51.802 31.439 43.164 28.917 103.597 26.401 103.597 26.401s-19.729 15.091-94.965-8.803l72.767 31.437s-110.997-23.891-143.066-69.156c-32.073-45.265 1.229-18.86 8.634-6.285zm371.255 3.976c13.608-14.132 23.409-26.608 23.409-26.608s-4.01 12.711-23.409 26.608zM579.086 611.364c13.566-133.285 70.302-189.872 70.302-189.872s43.164-42.749 177.598-49.034c134.429-6.286 177.604 46.522 181.306 55.324 3.698 8.802-17.275-5.026-23.44-2.51-6.165 2.51 19.738 49.038 19.738 49.038-13.569-50.297 7.4 7.543 20.962 1.253 13.569-6.281-27.133-22.631-13.562-35.206 13.562-12.575 41.92 76.702 60.431 116.941 18.499 40.235 12.33 81.73 11.101 108.137s-7.4 37.723-7.4 37.723l-3.7-62.876s2.471-8.796-17.27 35.216l-16.03 42.749c-11.099-196.159-55.507-270.351-55.507-270.351s-16.03-49.032-145.531-50.293c-129.496-1.249-148 32.7-148 32.7-41.93 55.324-66.598 173.52-60.426 251.475 6.164 77.961 0 99.342 55.496 123.232 55.5 23.887 139.364 26.407 139.364 26.407 100.733 2.832 151.375-17.074 176.395-35.005a314.522 314.522 0 0 1-9.895 9.851c-18.499 17.601-189.934 54.071-279.964 18.864-90.032-35.208-96.199-69.156-90.032-172.266 6.169-103.109 38.235-188.609 60.434-221.305 22.199-32.692 101.134-42.753 101.134-42.753-107.302 2.518-119.634 59.093-125.802 69.163-6.168 10.059-24.668 30.18-28.367 13.828-3.698-16.344-36.859 83.609-30.691 88.641 6.164 5.03 44.257-50.923 44.257-50.923s-13.566 27.668-27.132 105.625c-13.567 77.957 7.397 116.937-6.169 119.453s16.871-115.034-21.984-120.262c-11.071-1.492-1.884 103.965 3.055 125.34 4.93 21.38 10.301 27.619 10.301 27.619s-34.537-22.639-20.972-155.923"
                  />
                </defs>

                <clipPath id="b"></clipPath>

                <g clip-path="url(#b)">
                  <linearGradient
                    id="c"
                    gradientUnits="userSpaceOnUse"
                    x1="-2310.491"
                    y1="-610.653"
                    x2="-1743.503"
                    y2="-68.654"
                    gradientTransform="translate(1691.245 655.838) scale(.4949)"
                  >
                    <stop offset="0" stop-color="#8c8c8c" />

                    <stop offset=".5" stop-color="#464646" />

                    <stop offset=".75" stop-color="#ffffff" />

                    <stop offset="1" stop-color="#ffffff" />
                  </linearGradient>

                  <path
                    d="M1094.29 667.165c.229-.334 0 0 0 0zM607.449 803.749s25.906 23.892 44.403 41.494c.001 0-24.667-13.828-44.403-41.494zm-6.894-317.058c14.668-29.588 29.101-48.843 29.101-48.843s-13.754 20.747-29.101 48.843zm480.497 284.368l-4.821 14.047 43.051-15.304-41.651 21.347 42.3 25.102-46.488-19.06 7.44 46.485-15.093-44.904-10.939 3.09c-22.941 34.107-54.46 51.176-94.119 70.2-73.72 35.372-171.977 25.992-171.977 25.992s115.999-1.476 204.73-54.071c18.327-10.862 33.605-25.925 46.287-42.948l-19.15-1.056 21.949-2.8a219.328 219.328 0 0 0 5.991-8.89l-25.481-14.72 27.49 11.541a264.99 264.99 0 0 0 8.052-13.976l-10.87-34.028 12.847 30.285c19.042-36.827 29.072-75.95 33.69-100.226-5.329 50.816-14.629 87.039-27.771 114.21l.961 2.256s48.099-62.868 39.471-165.977c-8.632-103.109-33.3-139.574-57.972-164.722l-1.228 12.577s-35.763-106.886-213.364-104.366c-177.604 2.518-191.17 60.35-191.17 60.35l-9.866 5.04s-41.931 32.682-67.832 119.449c-25.903 86.761-1.235 157.176-1.235 157.176s-13.565-57.84-3.698-116.937c5.112-30.626 23.46-69.325 39.968-99.529-12.117 24.431-24.402 55.908-28.867 89.47-9.872 74.188-7.403 124.483 4.929 162.202 12.332 37.719 19.735 54.071 19.735 54.071s-51.798-60.36-53.032-188.613c-1.234-128.259 107.297-216.274 155.396-235.137 48.101-18.86 199.801-44.004 291.065 20.117 91.271 64.129 85.101 80.471 114.7 139.578 29.61 59.097 17.272 178.55-23.428 242.679zm-21.601 23.52c-.099.164-.189.328-.29.484l.922-.116-.632-.368zm4.239-7.57c-.519.983-1.038 1.987-1.569 2.948l2.899 1.22-1.33-4.168zm-434.034 5.425c7.396 12.575 45.629 35.208 45.629 35.208s-20.969-12.579-44.398-40.241c-23.438-27.66 8.634 2.516 51.802 31.439 43.164 28.917 103.597 26.401 103.597 26.401s-19.729 15.091-94.965-8.803l72.767 31.437s-110.997-23.891-143.066-69.156c-32.073-45.265 1.229-18.86 8.634-6.285zm371.255 3.976c13.608-14.132 23.409-26.608 23.409-26.608s-4.01 12.711-23.409 26.608zM579.086 611.364c13.566-133.285 70.302-189.872 70.302-189.872s43.164-42.749 177.598-49.034c134.429-6.286 177.604 46.522 181.306 55.324 3.698 8.802-17.275-5.026-23.44-2.51-6.165 2.51 19.738 49.038 19.738 49.038-13.569-50.297 7.4 7.543 20.962 1.253 13.569-6.281-27.133-22.631-13.562-35.206 13.562-12.575 41.92 76.702 60.431 116.941 18.499 40.235 12.33 81.73 11.101 108.137s-7.4 37.723-7.4 37.723l-3.7-62.876s2.471-8.796-17.27 35.216l-16.03 42.749c-11.099-196.159-55.507-270.351-55.507-270.351s-16.03-49.032-145.531-50.293c-129.496-1.249-148 32.7-148 32.7-41.93 55.324-66.598 173.52-60.426 251.475 6.164 77.961 0 99.342 55.496 123.232 55.5 23.887 139.364 26.407 139.364 26.407 100.733 2.832 151.375-17.074 176.395-35.005a314.522 314.522 0 0 1-9.895 9.851c-18.499 17.601-189.934 54.071-279.964 18.864-90.032-35.208-96.199-69.156-90.032-172.266 6.169-103.109 38.235-188.609 60.434-221.305 22.199-32.692 101.134-42.753 101.134-42.753-107.302 2.518-119.634 59.093-125.802 69.163-6.168 10.059-24.668 30.18-28.367 13.828-3.698-16.344-36.859 83.609-30.691 88.641 6.164 5.03 44.257-50.923 44.257-50.923s-13.566 27.668-27.132 105.625c-13.567 77.957 7.395 116.937-6.172 119.453s16.874-115.034-21.981-120.262c-11.071-1.492-1.884 103.965 3.055 125.34 4.93 21.38 10.301 27.619 10.301 27.619s-34.537-22.639-20.972-155.923"
                    fill="url(#c)"
                  />
                </g>
              </g>

              <radialGradient
                id="d"
                cx="-2079.394"
                cy="525.413"
                r="98"
                gradientTransform="matrix(1 0 0 -1.0689 2229.395 715.031)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#e60a47" />

                <stop offset="1" stop-color="#7c0626" />
              </radialGradient>

              <path
                d="M159.061 257.157c.104-.005 15.295-.75 28.545-3.736 11.514-2.592 21.703-7.546 21.805-7.595l.037-.02.041-.019c.057-.024 5.734-2.475 9.226-5.812 3.54-3.385 5.149-7.813 5.165-7.857.072-.192 6.27-16.711 10.957-34.356 4.314-16.237 7.273-34.188 7.304-34.367.046-.236 3.62-18.374 4.624-37.667.844-16.215-.832-34.625-.852-34.81-.01-.139-.873-11.041-5.248-18.17-3.932-6.405-11.523-9.551-11.6-9.583l-.066-.026-.064-.034c-.088-.044-8.902-4.46-25.623-8.098-13.336-2.901-31.872-4.972-47.221-5.271-17.547-.345-36.385.879-50.385 3.272-16.791 2.87-27.7 7.134-27.81 7.177l-.091.034-.094.025c-.109.029-10.989 3.012-16.708 10.274-5.811 7.377-6.752 19.496-6.761 19.618l-.007.074c-.017.124-1.235 10.576-1.235 23.386 0 2.296.038 4.668.132 7.071.655 17.062 3.638 35.972 3.667 36.161.035.187 4.076 22.387 8.685 41.097 3.414 13.87 7.86 26.141 7.905 26.262l.029.088.023.09c.017.062 1.532 6.288 3.996 10.633 2.146 3.78 5.305 6.003 5.338 6.022l.052.036.051.042c.023.017 2.173 1.753 5.473 3.562 3.8 2.08 8.892 4.312 9.108 4.402.359.141 11.584 4.438 26.382 6.391 15.454 2.04 35.023 1.707 35.22 1.704z"
                fill="url(#d)"
                stroke="#6d0115"
                stroke-width="2"
              />

              <path
                d="M91.997 245.268c-.67-.307-1.035-.484-1.035-.484-.038-.017-.229-.1-.538-.242l-.112-.665c-2.65-14.612-6.695-41.309-8.018-73.863-1.636-38.282-1.573-85.2-1.418-107.926v-1.644c.447-.15.91-.302 1.388-.455l.007 1.647c-.157 22.532-.232 69.806 1.414 108.321 1.345 33.122 5.513 60.153 8.148 74.514l.164.797z"
                fill="#6d0115"
              />

              <path
                d="M96.372 247.142c-.536-.217-1.04-.426-1.508-.622l-.13-1.025c-1.93-13.761-5.345-41.815-6.968-77.702-1.724-38.15-1.413-86.103-1.143-107.903l.003-1.225c.453-.13.917-.26 1.39-.391l.003 1.352c-.27 21.65-.59 69.823 1.138 108.107 1.66 36.699 5.196 65.183 7.093 78.533l.122.876zM129.095 52.757c.35 42.26 1.36 164.166 1.655 199.48l.027 2.983c-.452-.048-.915-.1-1.383-.154l-.035-2.834c-.294-35.288-1.303-156.878-1.654-199.29l-.035-1.236c.468-.04.937-.079 1.405-.115l.02 1.166zM147.212 52.208l.66 201.034.01 2.82c-.488.006-.956.01-1.402.012v-3.2c-.14-41.955-.543-164.766-.662-201.123l-.007-.946 1.36-.016.041 1.419zM154.168 52.392l-.997 200.853-.002 2.72c-.483.013-.95.024-1.414.034l.02-2.206c.175-35.677.795-160.61 1-201.673l-.033-1.326c.485.005.968.01 1.45.018l-.024 1.58zM172.972 252.523c.998-16.528 2.885-51.567 3.66-91.215.79-40.408.44-86.394.194-107.991l-.079-1.39c.564.05 1.123.1 1.68.152l.077 1.78c.241 21.836.582 67.398-.2 107.48-.77 39.318-2.63 74.11-3.635 90.833l-.147 2.389c-.585.07-1.092.137-1.687.2l.137-2.238zM220.494 236.141a19.964 19.964 0 0 1-2.19 2.503l.668-3.546c2.908-15.064 6.668-38.366 8.545-65.728 2.23-32.528 2.516-77.005 2.47-102.278l.03-2.421c.542.3 1.092.618 1.64.96l.004 3.227c.032 25.564-.293 68.796-2.474 100.625-1.843 26.861-5.497 49.83-8.389 64.97l-.304 1.688zM236.569 181.574a546.508 546.508 0 0 0 3.082-31.494c1.682-24.807 1.725-52.91 1.511-70.796l-.036-2.985a37.622 37.622 0 0 1 1.722 4.71l.033 2.774c.15 17.908-.011 43.553-1.56 66.408a517.142 517.142 0 0 1-1.146 14.066l-.511 5.027a798.308 798.308 0 0 1-3.929 18.58l.834-6.29z"
                fill="#6d0115"
              />

              <path
                d="M214.574 241.58c-.53.36-1.163.77-1.878 1.201l.508-2.853c2.787-15.345 7.126-43.196 8.832-75.56 1.87-35.553 1.877-77.814 1.72-99.45l-.065-3.063c.477.168 1.04.375 1.663.624l.078 2.854c.153 21.78.135 63.762-1.727 99.12-1.658 31.474-5.803 58.697-8.602 74.354l-.53 2.772zM194.048 248.616c1.318-14.298 3.735-43.895 4.896-79.601 1.303-40.084 1.308-87.585 1.212-110.53l-.05-3.264c.581.12 1.155.24 1.718.362l.006 3.159c.096 23.058.085 70.371-1.214 110.327-1.153 35.47-3.545 64.925-4.87 79.37l-.17 1.755c-.552.163-1.105.331-1.72.502l.192-2.08zM188.273 249.966c1.447-12.142 3.818-35.677 4.797-66.287 1.426-44.537 1.25-100.703 1.064-126.695l-.033-2.891c.554.094 1.101.189 1.64.288l.063 3.022c.186 26.188.354 82.01-1.067 126.33-.964 30.139-3.275 53.439-4.734 65.797l-.27 2.238c-.555.135-1.149.285-1.735.42l.275-2.222zM183.589 250.95c1.133-12.837 3.086-38.265 4.004-69.2 1.282-43.233.951-97.978.642-126.52l-.033-2.04c.57.076 1.133.156 1.687.237l.03 2.729c.304 28.806.614 82.855-.655 125.641-.903 30.457-2.81 55.585-3.949 68.647l-.208 2.369c-.576.119-1.118.23-1.714.344l.196-2.206zM178.155 252.042c.96-14.996 2.774-46.327 3.566-79.934 1.055-44.674 1.105-94.508 1.059-117.836l-.047-1.756c.566.064 1.128.127 1.688.192l.034 1.98c.045 23.509-.011 73.033-1.06 117.458-.784 33.206-2.562 64.193-3.532 79.421l-.144 2.247c-.597.1-1.078.184-1.693.277l.129-2.05zM172.407 53.491c-.072 23.874-.311 78.036-1.084 124.235a3206.07 3206.07 0 0 1-2.147 74.431l-.129 2.958c-.471.04-.946.08-1.418.118l.138-2.629c.585-14.338 1.62-42.56 2.163-74.901.78-46.426 1.018-100.897 1.089-124.577l.01-1.639c.468.033.938.064 1.404.098l-.026 1.906zM165.525 52.392c.194 21.07.482 62.303.225 101.16-.28 42.062-1.19 82.222-1.622 99.514l-.052 2.42c-.474.03-.946.06-1.417.086l.064-2.053c.43-17.01 1.353-57.524 1.634-99.979.257-38.628-.026-79.612-.22-100.783l-.014-1.658c.464.021.928.042 1.39.065l.012 1.228zM160.06 52.3c.285 24.165.683 67.416.49 108.206-.18 37.95-.993 74.297-1.482 93.287l-.042 1.965-1.403.06.058-2.3c.49-19.051 1.294-55.24 1.474-93.018.194-40.587-.198-83.608-.486-107.834l-.032-1.764 1.403.04.02 1.359zM110.848 251.924c-.485-.12-.966-.244-1.444-.373l-.083-.904c-1.17-12.617-3.522-40.992-4.494-74.3-1.243-42.489-.83-95.593-.525-120.6l-.011-1.095c.465-.08.931-.16 1.404-.238l.003 1.109c-.304 24.891-.724 78.182.521 120.786.986 33.737 3.388 62.404 4.538 74.73l.09.885zM101.41 249.056c-.502-.18-.993-.357-1.471-.533l-.114-1.044c-2.13-17.76-6.247-56.126-7.552-96.828-1.105-34.436-.15-72.87.493-92.198l.025-1.417c.462-.112.93-.225 1.404-.336l-.018 1.221c-.642 19.115-1.627 57.94-.512 92.689 1.323 41.276 5.543 80.147 7.638 97.507l.108.939zM61.774 178.267c-1.7-8.28-2.694-14.328-2.712-14.434l-.239-3.627c-.98-12.39-1.862-26.27-2.067-38.105-.243-13.994-.14-27.986.021-38.451l-.058-1.334a42.428 42.428 0 0 1 1.552-4.871l-.12 7.44c-.15 10.31-.236 23.75 0 37.195.259 14.973 1.604 33.23 2.862 47.582l.761 8.605zM73.88 222.454c-.965-2.83-2.07-6.167-3.216-9.813l-.849-4.896c-2.17-12.831-4.096-26.46-4.641-36.928-2.839-34.8-2.983-74.97-2.804-96.353l.035-3.934c.441-.483.898-.94 1.363-1.367l.008 3.721c-.199 20.905-.12 62.194 2.787 97.841.635 12.206 3.156 28.727 5.747 43.253l1.57 8.476zM80.724 229.775c-2.861-14.106-6.391-34.912-8.218-58.7-2.835-36.915-2.737-80.353-2.458-101.843l.033-4.439c-.406.209-.891.471-1.429.786l.002 3.7c-.278 21.539-.372 64.974 2.463 101.9 1.82 23.696 5.326 44.444 8.186 58.593l1.78 8.395c.308.347.634.69.98 1.02.25.238.514.475.785.706l-2.124-10.118zM105.92 249.785c-1.295-11.636-3.583-35.202-4.53-63.644-1.56-46.794-1.671-105.2-1.64-129.46l-.013-1.183c-.475.093-.945.19-1.408.286l.028 1.03c-.031 24.352.083 82.646 1.64 129.373.928 27.81 3.134 50.97 4.446 62.905l.109 1.027c.476.155.96.307 1.45.455l-.082-.79z"
                fill="#6d0115"
              />

              <path
                d="M76.322 62.075c-.514.197-.987.383-1.419.557l-.026 2.092c-.467 21.84-1.079 65.505.656 94.197 2.462 40.688 7.562 69.529 10.082 81.916l.235 1.22c.535.336 1.143.695 1.645.979l-.313-1.497c-2.43-11.744-7.732-40.967-10.257-82.7-1.747-28.883-1.11-72.988-.644-94.62l.041-2.198M111.69 53.493l-1.408.202.023 1.17c-.241 22.746-.55 67.732.185 107.117.7 37.45 2.998 71.6 4.293 88.509l.165 2.351c.475.096.95.191 1.426.282l-.152-2.075c-1.284-16.648-3.63-51.178-4.34-89.093-.738-39.43-.426-84.478-.184-107.183l-.008-1.28zM117.603 52.726c-.476.057-.95.114-1.422.173l-.004 1.14c-.36 18.547-.895 56.92-.114 95.128.844 43.45 3.118 84.471 4.217 102.491l.125 2.18c.48.077.955.154 1.43.226l-.158-2.383c-1.096-17.951-3.377-59.027-4.221-102.542-.78-38.266-.243-76.7.117-95.19l.03-1.223zM123.3 52.107c-.463.044-.928.093-1.391.14l-.01 1.154c-.155 19.905-.37 61.752.108 102.353.464 39.372 1.652 78.297 2.248 96.123l.084 2.555c.471.065.94.129 1.4.19l-.092-2.753c-.595-17.805-1.785-56.746-2.248-96.132-.481-40.786-.261-82.833-.106-102.614l.007-1.016zM135.382 51.166c-.485.028-.97.055-1.454.085l.035.777c.241 36.489 1.067 160.896 1.333 201.217l.023 2.413c.493.043.961.082 1.401.116l-.03-2.438c-.268-40.244-1.093-164.985-1.335-201.4l.027-.77zM141.246 50.905c-.472.015-.946.033-1.421.049l.035 1.345.364 200.39-.022 3.323c.362.023.625.036.776.044.08 0 .296.007.637.008l.003-3.465c-.07-37.47-.294-161.708-.366-200.3l-.006-1.394zM198.774 246.72c2.013-16.935 5.668-51.941 7.213-93.915 1.153-31.248.238-73.167-.364-94.129l-.107-2.256c.585.138 1.153.277 1.709.415l.084 2.32c.602 21.15 1.494 62.677.349 93.71-1.545 41.922-5.19 76.907-7.209 93.924l-.241 1.94a83.53 83.53 0 0 1-1.757.58l.323-2.588z"
                fill="#6d0115"
              />

              <path
                d="M205.757 244.301c1.628-14.744 4.485-43.887 6.205-80.237 1.654-34.904 1.568-79.968 1.368-103.86l-.035-1.738c-.539-.156-1.101-.315-1.687-.478l.05 2.061c.201 23.829.29 68.99-1.363 103.938-1.742 36.79-4.647 66.183-6.261 80.71l-.311 2.634c.5-.229 1.091-.5 1.737-.801l.297-2.229zM210.879 241.066c1.97-13.195 4.65-34.773 6.173-62.334 2.263-40.996 2.671-93.295 2.736-116.677l-.033-1.552c-.472-.165-1.024-.35-1.655-.56l.019 1.57c-.06 23.09-.457 75.85-2.736 117.127-1.582 28.683-4.423 50.86-6.405 63.822l-.386 2.548a85.907 85.907 0 0 0 1.828-.94l.459-3.004zM225.506 223.964s1.5-4.134 3.351-10.047l.702-4.595c2.28-15.25 4.686-34.27 6.28-54.88 2.123-27.436 1.658-60.854 1.069-80.97l-.129-3.797a23.175 23.175 0 0 0-1.748-1.616l.135 3.09c.617 19.739 1.208 54.695-.996 83.169-1.85 23.933-4.798 45.715-7.369 61.918l-1.295 7.728z"
                fill="#6d0115"
              />

              <g>
                <g fill="#1a1a1a">
                  <path d="M107.446 163.987V149.51H95.03l.046-36.44h16.21l-.087-14.632H77.5l3.046 111.991h14.808l-.324-46.44zM117.053 98.437l1.873 111.991h15.29l.31-111.991zM215.26 210.428l3.14-97.882h11.98l-.092-14.109h-41.553v14.126h12.078l-.348 97.865zM157.587 150.268l.168-38.04h8.537c3.87 8.472 6.357 19.676 8.307 38.04h-17.012zm-13.643 60.157H158.1l.158-46.309h16.961c1.334 8.173 1.66 33.406 1.74 46.31h13.731c1.296-57.175-2.73-89.493-13.849-111.99h-34.192l1.295 111.99z" />
                </g>

                <g transform="matrix(1.3933 0 0 1.65445 79.237 96.43)">
                  <radialGradient
                    id="e"
                    cx="-1672.399"
                    cy="327.422"
                    r="55"
                    gradientTransform="matrix(1.3933 0 0 -1.0181 2385.16 367.197)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="#d3d1d2" />

                    <stop offset=".5" stop-color="#c9c7c8" />

                    <stop offset="1" stop-color="#8d8b8c" />
                  </radialGradient>

                  <path
                    fill="url(#e)"
                    d="M21.547 30.871h-8.934l.033-22.026H24.31L24.247 0H0l2.192 67.691h10.654l-.233-28.07h8.934z"
                  />

                  <radialGradient
                    id="f"
                    cx="-1672.399"
                    cy="327.422"
                    r="55"
                    gradientTransform="matrix(1.3933 0 0 -1.0181 2385.16 367.197)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="#d3d1d2" />

                    <stop offset=".5" stop-color="#c9c7c8" />

                    <stop offset="1" stop-color="#8d8b8c" />
                  </radialGradient>

                  <path
                    fill="url(#f)"
                    d="M41.032 0H28.459l1.348 67.691h11.002z"
                  />

                  <radialGradient
                    id="g"
                    cx="-1672.399"
                    cy="327.422"
                    r="55"
                    gradientTransform="matrix(1.3933 0 0 -1.0181 2385.16 367.197)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="#d3d1d2" />

                    <stop offset=".5" stop-color="#c9c7c8" />

                    <stop offset="1" stop-color="#8d8b8c" />
                  </radialGradient>

                  <path
                    fill="url(#g)"
                    d="M88.476 67.691h10.645l2.26-59.163H110L109.934 0H80.035v8.538h8.691z"
                  />

                  <radialGradient
                    id="h"
                    cx="-1672.399"
                    cy="327.423"
                    r="54.998"
                    gradientTransform="matrix(1.3933 0 0 -1.0181 2385.16 367.197)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="#d3d1d2" />

                    <stop offset=".5" stop-color="#c9c7c8" />

                    <stop offset="1" stop-color="#8d8b8c" />
                  </radialGradient>

                  <path
                    d="M57.624 31.329l.12-22.993h6.143c2.785 5.121 4.574 11.893 5.977 22.993h-12.24zM47.808 67.69h10.186l.114-27.991h12.204c.959 4.941 1.194 20.191 1.252 27.991h9.88c.931-34.558-1.965-54.092-9.967-67.69H46.876l.932 67.69z"
                    fill="url(#h)"
                  />
                </g>
              </g>
            </svg>
          </a>
          <ul
            id="navbar"
            className={this.state.clicked ? "#navbar active" : "#navbar"}
          >
            <li>
              <a className="active" href="index.html">
                MODELOS
              </a>
            </li>
            <li>
              <a href="index.html">PRUEBA DE MANEJO</a>
            </li>
            <li>
              <a href="index.html">COTIZAR</a>
            </li>
            <li>
              <a href="index.html">PROMOCIONES</a>
            </li>
          </ul>
          <div id="mobile" onClick={this.handleClick}>
            <i
              id="bar"
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
        </div>
      </>
    );
  }
}

export default Navbar;
