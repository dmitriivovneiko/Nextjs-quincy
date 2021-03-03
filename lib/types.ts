import { StoryblokComponent, StoryData } from 'storyblok-js-client'

export type StoryBlokLink = {
  id: number
  slug: string
  name: string
  is_folder: boolean
  parent_id: number
  published: boolean
  position: number
  uuid: string
  is_startpage: boolean
  real_path: string
}

export type StoryType = 'page' | 'post'

export type StoryBlokComponentType = 'teaser' | 'grid'

// Stories
export type Story<Fields extends Record<string, unknown> = {}> = StoryData<
  StoryContent<StoryBlokComponentType, Fields>
>

export type HomeStory = Story<{ body: StoryBlokComponent[] }>
export type AboutStory = Story<{ body?: StoryBlokComponent[] }>
export type ContactStory = Story<{ body?: StoryBlokComponent[] }>
export type PostStory = Story<Post>

export type Stories = HomeStory | AboutStory | ContactStory | PostStory

// Story content
export type StoryContent<
  Type extends StoryBlokComponentType,
  Fields extends Record<string, unknown>
> = StoryblokComponent<Type> & Fields

export type TeaserBlok = StoryContent<'teaser', { headline: string }>
export type GridBlok = StoryContent<'grid', { columns: { name: string }[] }>

export type Post = {
  title: string
  image: string
  intro: string
  longText: string
  author: string
}

export type StoryBlokComponent = TeaserBlok | GridBlok
