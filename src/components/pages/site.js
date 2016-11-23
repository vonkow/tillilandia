import React from 'react'
import {observer} from 'mobx-react'

@observer(['actions', 'state'])
export default class AboutSite extends React.Component {

  render () {
    return (
      <div>
        <h2>What's this?</h2>
        <p>
          Yours truly (Caz) accidentally started collecting Tillandsias, or
          Air Plants, at the end of 2015. Since I have too many to keep track 
          of in my head (seriously, I have over 50), I decided to make a site 
          to catalog them. 
        </p>
        <p>
          Native to central and south america (plus a few of the southern US 
          states), most Tillandsias are epiphytes, growing on trees or rocks.
          With over 650 species (and countless hybrids) adapted to survive in
          conditions ranging from tropical rain forests to deserts to the 
          mountain peaks of the Andes, tillys are a diverse lot.
        </p>
        <p>
          As my collection has grown, I've become acquainted with many places
          that sell plants in the Seattle area. In cases where I can recall
          where I acquired a specific tilly, I'll make note of it. I've also
          become involved with the Volunteer Park Conservatory, volunteering at
          the Gift Shop most weeks and occasionally begging the gardeners for
          offsets of some of their rarer varieties. If you're ever in Seattle,
          I highly recommend a visit, especially when it's gloomy out.
        </p>
        <p>
          Not only is this site a useful resource for me to remember which of my
          tillys are which, it's also a pretty good example of what I do for a 
          living. It's built using Django and React, with the help of Django REST
          Framework and MobX. You can take a look at the source code on &nbsp;
          <a href="https://github.com/vonkow/tillilandia">github</a>; if you're
          interested in learning Django and/or React, there are worse places to
          start.
        </p>
      </div>
    )
  }

}
