import { storiesOf } from "@storybook/react"
import React from "react"
import Relay from "react-relay"

import { artsyNetworkLayer } from "../../../Relay/config"
import PopularArtistQueryConfig from "../../../Relay/Queries/PopularArtist"

import Artists from "../Steps/Artists"

function ConnectedPopularArtistSelector() {
  Relay.injectNetworkLayer(artsyNetworkLayer())
  return <Relay.RootContainer Component={Artists} route={new PopularArtistQueryConfig()} />
}

storiesOf("Onboarding", module).add("Artist Selector", () => <ConnectedPopularArtistSelector />)
