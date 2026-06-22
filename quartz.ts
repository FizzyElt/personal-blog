import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import * as Plugin from "./.quartz/plugins"

Plugin.RecentNotes({
  title: "Recent Notes/Posts",
  limit: 5,
  showTags: false,
  linkToMore: false,
  filter: (f: any) =>
    !!f.relativePath?.startsWith("notes/") || !!f.relativePath?.startsWith("posts/"),
})

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()
