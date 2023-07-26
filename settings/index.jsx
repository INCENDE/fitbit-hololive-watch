registerSettingsPage(({ settings }) => (
  <Page>
    <Section title="Display Settings">
      <Toggle settingsKey="displaySeconds" label="Show Time Seconds" />
      <Toggle settingsKey="displayBattery" label="Show Battery" />
      <Toggle settingsKey="steps" label="Show Steps" />
      <Toggle settingsKey="heart" label="Show Heart Rate" />
      <Toggle settingsKey="cals" label="Show Calories" />
      <Toggle settingsKey="distance" label="Show Distance" />
    </Section>

    <Section title="Font Color">
      <ColorSelect
        settingsKey="color"
        colors=
        {[
          { color: "black" },
          { color: "navy" },
          { color: "darkblue" },
          { color: "mediumblue" },
          { color: "blue" },
          { color: "darkgreen" },
          { color: "green" },
          { color: "teal" },
          { color: "darkcyan" },
          { color: "deepskyblue" },
          { color: "darkturquoise" },
          { color: "mediumspringgreen" },
          { color: "lime" },
          { color: "springgreen" },
          { color: "aqua" },
          { color: "cyan" },
          { color: "midnightblue" },
          { color: "dodgerblue" },
          { color: "lightseagreen" },
          { color: "forestgreen" },
          { color: "seagreen" },
          { color: "darkslategray" },
          { color: "darkslategrey" },
          { color: "limegreen" },
          { color: "mediumseagreen" },
          { color: "turquoise" },
          { color: "royalblue" },
          { color: "steelblue" },
          { color: "darkslateblue" },
          { color: "mediumturquoise" },
          { color: "indigo" },
          { color: "darkolivegreen" },
          { color: "cadetblue" },
          { color: "cornflowerblue" },
          { color: "mediumaquamarine" },
          { color: "dimgray" },
          { color: "dimgrey" },
          { color: "slateblue" },
          { color: "olivedrab" },
          { color: "slategray" },
          { color: "slategrey" },
          { color: "lightslategray" },
          { color: "lightslategrey" },
          { color: "mediumslateblue" },
          { color: "lawngreen" },
          { color: "chartreuse" },
          { color: "aquamarine" },
          { color: "maroon" },
          { color: "purple" },
          { color: "olive" },
          { color: "gray" },
          { color: "grey" },
          { color: "skyblue" },
          { color: "lightskyblue" },
          { color: "blueviolet" },
          { color: "darkred" },
          { color: "darkmagenta" },
          { color: "saddlebrown" },
          { color: "darkseagreen" },
          { color: "lightgreen" },
          { color: "mediumpurple" },
          { color: "darkviolet" },
          { color: "palegreen" },
          { color: "darkorchid" },
          { color: "yellowgreen" },
          { color: "sienna" },
          { color: "brown" },
          { color: "darkgray" },
          { color: "darkgrey" },
          { color: "lightblue" },
          { color: "greenyellow" },
          { color: "paleturquoise" },
          { color: "lightsteelblue" },
          { color: "powderblue" },
          { color: "firebrick" },
          { color: "darkgoldenrod" },
          { color: "mediumorchid" },
          { color: "rosybrown" },
          { color: "darkkhaki" },
          { color: "silver" },
          { color: "mediumvioletred" },
          { color: "indianred" },
          { color: "peru" },
          { color: "chocolate" },
          { color: "tan" },
          { color: "lightgray" },
          { color: "lightgrey" },
          { color: "thistle" },
          { color: "orchid" },
          { color: "goldenrod" },
          { color: "palevioletred" },
          { color: "crimson" },
          { color: "gainsboro" },
          { color: "plum" },
          { color: "burlywood" },
          { color: "lightcyan" },
          { color: "lavender" },
          { color: "darksalmon" },
          { color: "violet" },
          { color: "palegoldenrod" },
          { color: "lightcoral" },
          { color: "khaki" },
          { color: "aliceblue" },
          { color: "honeydew" },
          { color: "azure" },
          { color: "sandybrown" },
          { color: "wheat" },
          { color: "beige" },
          { color: "whitesmoke" },
          { color: "mintcream" },
          { color: "ghostwhite" },
          { color: "salmon" },
          { color: "antiquewhite" },
          { color: "linen" },
          { color: "lightgoldenrodyellow" },
          { color: "oldlace" },
          { color: "red" },
          { color: "fuchsia" },
          { color: "magenta" },
          { color: "deeppink" },
          { color: "orangered" },
          { color: "tomato" },
          { color: "hotpink" },
          { color: "coral" },
          { color: "darkorange" },
          { color: "lightsalmon" },
          { color: "orange" },
          { color: "lightpink" },
          { color: "pink" },
          { color: "gold" },
          { color: "peachpuff" },
          { color: "navajowhite" },
          { color: "moccasin" },
          { color: "bisque" },
          { color: "mistyrose" },
          { color: "blanchedalmond" },
          { color: "papayawhip" },
          { color: "lavenderblush" },
          { color: "seashell" },
          { color: "cornsilk" },
          { color: "lemonchiffon" },
          { color: "floralwhite" },
          { color: "snow" },
          { color: "yellow" },
          { color: "lightyellow" },
          { color: "ivory" },
          { color: "white" },
        ]}
      />
    </Section>
  </Page>
));