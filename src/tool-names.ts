// Auto-generated at build time
export const toolNames: Array<{ name: string; description: string }>= [
  {
    "name": "list-transformations",
    "description": "Lists all transformation definitions in your account (including named transformations\n\nRetrieves a list of all transformations, which can be filtered to show either only named or unnamed transformations.\n"
  },
  {
    "name": "get-transformation-details",
    "description": "Retrieves details of a specific transformation\n\nRetrieves details for a named or unnamed transformation.\n"
  },
  {
    "name": "create-transformation",
    "description": "Creates a new named transformation (assigning a custom name to a set of transformation\n\nCreates a new named transformation with the given name and transformation string.\n"
  },
  {
    "name": "update-transformation",
    "description": "Updates the definition of an existing named transformation\n\nUpdate an existing named or unnamed transformation.\n"
  },
  {
    "name": "delete-transformation",
    "description": "Deletes a named transformation from your account\n\nDelete a named or unnamed transformation. Optionally invalidate derived resources generated using the named transformation.\n"
  },
  {
    "name": "create-upload-preset",
    "description": "Creates a new upload preset with specified configuration settings"
  },
  {
    "name": "list-upload-presets",
    "description": "Lists all upload presets configured in the account"
  },
  {
    "name": "get-upload-preset-details",
    "description": "Retrieves details of a single upload preset"
  },
  {
    "name": "update-upload-preset",
    "description": "Updates an existing upload preset's configuration settings"
  },
  {
    "name": "delete-upload-preset",
    "description": "Deletes an upload preset from the account"
  },
  {
    "name": "list-upload-mappings",
    "description": "Retrieves a list of all upload mapping rules configured in your Cloudinary product environment\n\nReturns a list of all upload mappings defined for your account.\nUpload mappings allow you to map an upload preset to a specific folder and URL template.\n"
  },
  {
    "name": "create-upload-mapping",
    "description": "Creates a new upload mapping\n\nCreates a new upload mapping for the specified folder"
  },
  {
    "name": "update-upload-mapping",
    "description": "Updates an existing upload mapping by changing its remote URL template for a given\n\nUpdates the URL template for an existing folder mapping"
  },
  {
    "name": "delete-upload-mapping",
    "description": "Deletes a folder upload mapping\n\nPermanently deletes the upload mapping for the specified folder"
  },
  {
    "name": "list-triggers",
    "description": "Lists all webhook notification triggers configured for your product environmentcloudinary\n\nRetrieves a list of all event triggers and notifications within your product environment.\n"
  },
  {
    "name": "create-trigger",
    "description": "Creates a new notification trigger (webhook) by specifying an event type and a destination\n\nCreates a new trigger.\nYour product environment supports triggers up to a maximum determined by multiplying the number of unique event types by the limit of 30 notification URLs.\n"
  },
  {
    "name": "update-trigger",
    "description": "Updates the callback URL of an existing webhook trigger in your Cloudinary account\n\nUpdates a notification URL for a trigger."
  },
  {
    "name": "delete-trigger",
    "description": "Deletes a notification trigger\n\nDeletes a trigger."
  },
  {
    "name": "test-trigger",
    "description": "Tests an existing trigger's filter against sample data\n\nEvaluates an existing trigger's filter against provided sample data.\nUse this endpoint to verify that a trigger's filter will match expected events.\n"
  },
  {
    "name": "create-streaming-profile",
    "description": "Creates a new adaptive streaming profile in your Cloudinary account"
  },
  {
    "name": "list-streaming-profiles",
    "description": "Lists all adaptive streaming profiles (both built-in and custom) defined in your Cloudinary account"
  },
  {
    "name": "get-streaming-profile",
    "description": "Retrieves the details of a single adaptive streaming profile by its name"
  },
  {
    "name": "update-streaming-profile",
    "description": "Modifies an existing adaptive streaming profile's configuration"
  },
  {
    "name": "delete-streaming-profile",
    "description": "Delete custom streaming profile or revert built-in profile to the original settings"
  }
];
