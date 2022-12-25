import * as React from 'react'
import Layer from '../components/layer'
import Content from '../components/content'
import Seo from '../components/seo'

const NotFoundPage = () => {
    return (
        <Layer PageTitle="404 error">
            <Content Title="お探しのページが見つかりませんでした。">
                申し訳ありません。お探しのページが見つかりませんでした。<br/>
                お探しののページは削除または移動された可能性があります。
            </Content>
        </Layer>
    )
}

export default NotFoundPage

export const Head = () => (
    <Seo title="PageNotFound" pathname="404"/>
)

// import * as React from "react"
// import { Link } from "gatsby"

// // styles
// const pageStyles = {
//   color: "#232129",
//   padding: "96px",
//   fontFamily: "-apple-system, Roboto, sans-serif, serif",
// }
// const headingStyles = {
//   marginTop: 0,
//   marginBottom: 64,
//   maxWidth: 320,
// }

// const paragraphStyles = {
//   marginBottom: 48,
// }
// const codeStyles = {
//   color: "#8A6534",
//   padding: 4,
//   backgroundColor: "#FFF4DB",
//   fontSize: "1.25rem",
//   borderRadius: 4,
// }

// // markup
// const NotFoundPage = () => {
//   return (
//     <main style={pageStyles}>
//       <title>Not found</title>
//       <h1 style={headingStyles}>Page not found</h1>
//       <p style={paragraphStyles}>
//         Sorry{" "}
//         <span role="img" aria-label="Pensive emoji">
//           😔
//         </span>{" "}
//         we couldn’t find what you were looking for.
//         <br />
//         {process.env.NODE_ENV === "development" ? (
//           <>
//             <br />
//             Try creating a page in <code style={codeStyles}>src/pages/</code>.
//             <br />
//           </>
//         ) : null}
//         <br />
//         <Link to="/">Go home</Link>.
//       </p>
//     </main>
//   )
// }

// export default NotFoundPage
