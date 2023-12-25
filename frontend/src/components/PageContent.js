import classes from "./PageContent.module.css";

function PageContent({ title, children }) {
  return (
    <div className="posi-re">
      <img src="https://dvm0q8ak413bh.cloudfront.net/data/org/27126/media/img/source/edit/3091353_edit.webp" />
      <div className={classes.content +' posi-ab'}>
        <div>
        <h1>{title}</h1>
        {children}
        </div>
      </div>
    </div>
  );
}

export default PageContent;
