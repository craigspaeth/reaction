import { storiesOf } from "@storybook/react"
import React from "react"
import Relay from "react-relay"

import Artwork from "../Artwork"

import { artsyNetworkLayer } from "../../Relay/config"
import ArtworkQueryConfig from "../../Relay/Queries/Artwork"

function ArtworkExample(props: { artworkID: string }) {
  Relay.injectNetworkLayer(artsyNetworkLayer())
  return <Relay.RootContainer Component={Artwork} route={new ArtworkQueryConfig({ artworkID: props.artworkID })} />
}

storiesOf("Components/Artwork/Singular", module)
  .add("A square artwork", () => <ArtworkExample artworkID="christopher-burkett-coastal-storm-oregon" />)
  .add("A landscape artwork", () => <ArtworkExample artworkID="takashi-murakami-tan-tan-bo" />)
  .add("A landscape artwork (extra wide)", () => <ArtworkExample artworkID="brian-kosoff-bay-of-islands" />)
  .add("A portrait artwork", () => <ArtworkExample artworkID="ester-curini-my-eyes-my-soul" />)
  .add("A portrait artwork (extra tall)", () => <ArtworkExample artworkID="snik-untitled-vertical" />)
