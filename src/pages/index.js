import * as React from 'react'
import { graphql } from 'gatsby';
import Layer from '../components/layer'
import MarkedContent from '../components/marked_content'
import Content from '../components/content';
import JumpLink from '../components/jumplink';
import Seo from '../components/seo';
import AchievementView from '../components/achievement';
import BlogList from '../components/blog_list';
import LinkButton from '../components/linkbutton';

const Index = ({ data }) => {

    return (
        <main>
            <Seo title="LukeHome"
                description="Student / Programmer" 
                image="/icons/icon-512x512.png" 
                lang="ja"
            />
            <Layer PageTitle="Home">
                <MarkedContent Title="About Me" background="#DADEE5">
                    <p>
                        プログラミング好きの高校二年生です。中学一年生からC++に触れて、Pythonなども使いながら競技プログラミング/アプリ開発などをやってます。<br/>
                        たまにボルダリングをやってたりします
                    </p>
                    <LinkButton to='/about'>About</LinkButton>
                </MarkedContent>
                <MarkedContent Title="Skills">
                    <Content Title="プログラミング">
                        競技プログラミングがメインで、その次にアプリ/ゲーム開発、AI開発をやっています。 <br/>
                        競技プログラミングでは現在水色コーダーとして絶賛競技中で、アプリ開発ではある大会でデザイン優秀賞を受賞、他にもOpenSiv3Dというライブラリに多少の貢献をしていたりしてます!<br/>
                        AI開発は、自力でニューラルネットワークを組む程度には実力があります
                    </Content>
                    <Content Title="Web開発">
                        時々htmlやjsなどを叩いてます。このページも自作です
                    </Content>
                </MarkedContent>
                <MarkedContent Title="Achievements" background="#D3DAE5">
                    <AchievementView></AchievementView>
                    <LinkButton to='/achieve'>Achievements</LinkButton>
                </MarkedContent>
                <MarkedContent Title="Blogs">
                    <BlogList data={data.allMarkdownRemark}></BlogList>
                    <LinkButton to='/blogs'>Blogs</LinkButton>
                </MarkedContent>
                <MarkedContent Title="Links" background="#D3DAE5">
                    <JumpLink Href="https://twitter.com/luke02561">Twitter</JumpLink>
                    <JumpLink Href="https://github.com/Luke256">GitHub</JumpLink>
                    <JumpLink Href="https://atcoder.jp/users/yuta28">AtCoder</JumpLink>
                    <JumpLink Href="https://qiita.com/luke02561">Qiita</JumpLink>
                    <JumpLink Href="https://zenn.dev/luke256">Zenn</JumpLink>
                    <JumpLink Href="https://www.resume.id/luke256">resume</JumpLink>
                </MarkedContent>
            </Layer>
        </main>
    );
};

export default Index;

export const query = graphql`
query {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, limit: 5) {
      nodes {
        frontmatter {
          date(formatString: "YYYY/MM/DD")
          title
          slug
        }
      }
    }
  }
`