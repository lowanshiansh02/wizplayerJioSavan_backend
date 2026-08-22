import process from 'node:process'
import { serve } from '@hono/node-server'
import { AlbumController, ArtistController, SearchController, SongController } from '#modules/index'
import { PlaylistController } from '#modules/playlists/controllers'
import { App } from './app'

const app = new App([
  new SearchController(),
  new SongController(),
  new AlbumController(),
  new ArtistController(),
  new PlaylistController()
]).getApp()

if (typeof Bun === 'undefined') {
  const port = Number(process.env.PORT) || 3000
  // eslint-disable-next-line no-console
  console.log(`Server is running on http://localhost:${port}`)
  serve({
    fetch: app.fetch,
    port
  })
}

export default app
