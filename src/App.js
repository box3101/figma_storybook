// React 애플리케이션의 로고 이미지를 불러옵니다.
import logo from "./logo.svg";
// 애플리케이션의 전체 스타일을 정의한 CSS 파일을 불러옵니다.
import "./scss/ui.scss";
// Ant Design의 ConfigProvider 컴포넌트를 불러옵니다. 이는 전역 설정을 위해 사용됩니다.
import { ConfigProvider } from "antd";
// react-router-dom에서 필요한 컴포넌트들을 불러옵니다. 이들은 라우팅을 위해 사용됩니다.
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// Pan01 컴포넌트를 불러옵니다. 이는 '/pan01' 경로에서 렌더링될 컴포넌트입니다.
import Pan01 from "./pages/publishing/pages/plan/Plan01";
import Button from "./pages/publishing/pages/guide/Button";

// App 컴포넌트를 정의합니다. 이는 애플리케이션의 주요 컴포넌트입니다.
function App() {
	return (
		// ConfigProvider로 전체 앱을 감싸 전역 테마 설정을 적용합니다.
		<ConfigProvider
			theme={{
				token: {
					colorPrimary: "#0388A6"
					// ... 기타 토큰 설정
				}
			}}>
			{/* Router 컴포넌트로 앱을 감싸 라우팅 기능을 활성화합니다. */}
			<Router>
				<div className="App">
					{/* 네비게이션 메뉴를 생성합니다. */}
					<nav>
						<ul>
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/Button">Button</Link>
							</li>
						</ul>
					</nav>
					{/* Routes 컴포넌트 내에서 개별 라우트를 정의합니다. */}
					<Routes>
						{/* '/pan01' 경로에 대한 라우트. Pan01 컴포넌트를 렌더링합니다. */}
						<Route path="/pan01" element={<Pan01 />} />
						<Route path="/button" element={<Button />} />
						<Route
							path="/"
							element={
								<header className="App-header">
									{/* React 로고 이미지 */}
									<img src={logo} className="App-logo" alt="logo" />
									<p>
										Edit <code>src/App.js</code> and save to reload.33
									</p>
									{/* React 공식 웹사이트로 연결되는 링크 */}
									<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
										Learn React
									</a>
								</header>
							}
						/>
					</Routes>
				</div>
			</Router>
		</ConfigProvider>
	);
}

// App 컴포넌트를 내보내 다른 파일에서 불러올 수 있게 합니다.
export default App;
