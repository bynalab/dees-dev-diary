import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import DiaryPageHeader from "../components/headers/diaryPageHeader/diaryPageHeader";
import DiaryBody from "../components/diaryBody/diaryBody";
import Footer from "../components/footer/footer";
import DiaryPageFooter from "../components/footer/diaryPageFooter";

export const query = graphql`
  query BlogQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        id
        title
        date
        description
      }
      fields {
        slug
      }
    }
  }
`;

const DiaryPage = ({ data }) => {
  const post = data.markdownRemark;
  const slug = data.markdownRemark.fields.slug;

  return (
    <div className="diary-page">
      <Helmet>
        <title>Dee's Dev Diary - {post.frontmatter.title}</title>
        <meta name="description" content={post.frontmatter.description}></meta>
      </Helmet>
      <DiaryPageHeader />
      <DiaryBody
        id={post.frontmatter.id}
        date={post.frontmatter.date}
        title={post.frontmatter.title}
        html={{ __html: post.html }}
        slug={slug}
      />
      <Footer />
      <DiaryPageFooter />
    </div>
  );
};

export default DiaryPage;
