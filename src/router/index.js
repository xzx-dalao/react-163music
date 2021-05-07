import React from 'react'
import { Redirect } from 'react-router-dom'

const XZXDiscover = React.lazy(() => import("@/pages/discover"));
const XZXRecommend = React.lazy(() => import("../pages/discover/c-pages/recommend"));
const XZXRanking = React.lazy(() => import("../pages/discover/c-pages/ranking"));
const XZXSongs = React.lazy(() => import("../pages/discover/c-pages/songs"));
const XZXDjradio = React.lazy(() => import("../pages/discover/c-pages/djradio"));
const XZXArtist = React.lazy(() => import("../pages/discover/c-pages/artist"));
const XZXAlbum = React.lazy(() => import("../pages/discover/c-pages/album"));
const XZXPlayer = React.lazy(() => import("../pages/player"));


const XZXFriend = React.lazy(() => import("@/pages/friend"));
const XZXMine = React.lazy(() => import("@/pages/mine"));

const XZXSearch = React.lazy(() => import("@/pages/search"));
const XZXSearchSingle = React.lazy(() => import('@/pages/search/child-pages/single'))
const XZXSearchSinger = React.lazy(() => import('@/pages/search/child-pages/singer'))
const XZXSearchAlbum = React.lazy(() => import('@/pages/search/child-pages/album'))
const XZXSearchVideo = React.lazy(() => import('@/pages/search/child-pages/video'))
const XZXSearchArtist = React.lazy(() => import('@/pages/search/child-pages/artist'))
const XZXSearchSongs = React.lazy(() => import('@/pages/search/child-pages/songs'))
const XZXSearchDj = React.lazy(() => import('@/pages/search/child-pages/dj'))
const XZXSearchUser = React.lazy(() => import('@/pages/search/child-pages/user'))

const routes = [
    {
        path: "/",
        exact: true,
        render: () => (
            <Redirect to="/discover" />
        )
    },
    {
        path: "/discover",
        component: XZXDiscover,
        routes: [
            {
                path: "/discover",
                exact: true,
                render: () => (
                    <Redirect to="/discover/recommend" />
                )
            },
            {
                path: "/discover/recommend",
                component: XZXRecommend
            },
            {
                path: "/discover/ranking",
                component: XZXRanking,
            },
            {
                path: "/discover/songs",
                component: XZXSongs
            },
            {
                path: "/discover/djradio",
                component: XZXDjradio
            },
            {
                path: "/discover/artist",
                component: XZXArtist
            },
            {
                path: "/discover/album",
                component: XZXAlbum
            },
            {
                path: "/discover/player",
                component: XZXPlayer
            }
        ]
    },
    {
        path: "/mine",
        component: XZXMine
    },
    {
        path: "/friend",
        component: XZXFriend
    },
    {
        path: "/search",
        component: XZXSearch,
        routes: [
            {
              path: '/search',
              exact: true,
            //   render: () => <Redirect to="/search/single" />,
            },
            { path: '/search/single', component: XZXSearchSingle },
            { path: '/search/singer', component: XZXSearchSinger},
            { path: '/search/album', component: XZXSearchAlbum},
            { path: '/search/video', component: XZXSearchVideo },
            { path: '/search/artist', component: XZXSearchArtist },
            { path: '/search/songs', component: XZXSearchSongs },
            { path: '/search/dj', component: XZXSearchDj },
            { path: '/search/user', component: XZXSearchUser },
          ]
    }
];

export default routes;