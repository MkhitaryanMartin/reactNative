import * as React from "react"
import Svg, { Path } from "react-native-svg"
import {normalize} from "assets/RootStyles/normalize";


function AppleIcon({width, height, colors}) {
    return (
        <Svg
          width={normalize(width) ||normalize(19)}
          height={normalize(height) || normalize(23)}
          viewBox="0 0 19 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
         
        >
          <Path
            d="M13.665 0h.162c.13 1.606-.483 2.806-1.228 3.675-.731.863-1.732 1.7-3.351 1.573-.108-1.583.506-2.694 1.25-3.561C11.188.879 12.453.16 13.665 0zM18.566 16.716v.045c-.455 1.378-1.104 2.559-1.896 3.655-.723.995-1.609 2.334-3.191 2.334-1.367 0-2.275-.879-3.676-.903-1.482-.024-2.297.735-3.652.926h-.462c-.995-.144-1.798-.932-2.383-1.642C1.581 19.033.248 16.323 0 12.855v-1.019c.105-2.482 1.311-4.5 2.914-5.478.846-.52 2.009-.963 3.304-.765.555.086 1.122.276 1.619.464.471.181 1.06.502 1.618.485.378-.011.754-.208 1.135-.347 1.116-.403 2.21-.865 3.652-.648 1.733.262 2.963 1.032 3.723 2.22-1.466.933-2.625 2.339-2.427 4.74.176 2.181 1.444 3.457 3.028 4.209z"
            fill={colors || "#fff"}
          />
        </Svg>
      )
}

export  {AppleIcon}


