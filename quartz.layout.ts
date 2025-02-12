import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import { SimpleSlug } from "./quartz/util/path"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/fizzyelt",
      Twitter: "https://twitter.com/fizzyelt",
      Mastodon: "https://g0v.social/@fizzyelt",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(
      Component.RecentNotes({
        title: "Recent Notes",
        limit: 3,
        showTags: false,
        linkToMore: "/notes" as SimpleSlug,
        filter: (f) => !!f.relativePath?.startsWith("notes/"),
      }),
    ),
    Component.DesktopOnly(
      Component.RecentNotes({
        title: "Recent Posts",
        limit: 3,
        showTags: false,
        linkToMore: "/posts" as SimpleSlug,
        filter: (f) => !!f.relativePath?.startsWith("posts/"),
      }),
    ),

    // Component.Explorer({
    //   folderClickBehavior: "link",
    //   sortFn: (a, b) => {
    //     if (!a.file && !b.file) {
    //       return 0
    //     }

    //     if (a.file?.frontmatter?.published && b.file?.frontmatter?.published) {
    //       const dateA = new Date(a.file.frontmatter.published)
    //       const dateB = new Date(b.file.frontmatter.published)

    //       return dateB.getTime() - dateA.getTime()
    //     }

    //     return a.file && !b.file ? 1 : -1
    //   },
    // }),
  ],
  right: [
    Component.DesktopOnly(Component.Graph()),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.DesktopOnly(Component.Backlinks()),
    Component.MobileOnly(
      Component.RecentNotes({
        title: "Recent Notes/Posts",
        limit: 3,
        showTags: false,
        filter: (f) => f.slug !== "index",
      }),
    ),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
  ],
  right: [],
}
