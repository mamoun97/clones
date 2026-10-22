import StudioEditor from '@grapesjs/studio-sdk/react';
import '@grapesjs/studio-sdk/style';






export default function () {

  return <div className='h-screen'>

    <StudioEditor
      options={{
        licenseKey: 'c4ba7e9aa38d44e9a0f0c05c382570ac8dc0f7ed43f94b938619875ed22f8e91',
        theme: 'light',
        pages: false,
        project: {
          type: 'web',
          // TODO: replace with a unique id for your projects. e.g. an uuid
          id: 'UNIQUE_PROJECT_ID'
        },
        identity: {
          // TODO: replace with a unique id for your end users. e.g. an uuid
          id: 'UNIQUE_END_USER_ID'
        },
        assets: {
          storageType: 'self',
          // Provide a custom upload handler for assets
          onUpload: async ({ files }) => {
            const body = new FormData();
            for (const file of files) {
              body.append('file', file);
            }
            const response = await fetch('https://api.risecart.net/api/v1/upload-image', { method: 'POST', body });
            const result = await response.text();
            console.log(result)

            return [{ src: "https://pub-1c37b2c0ac504af39f174eebcbfdfd39.r2.dev/upload/" + result }];
          },
          // Provide a custom handler for deleting assets
          onDelete: async ({ assets }) => {
            const body = JSON.stringify(assets);
            await fetch('ASSETS_DELETE_URL', { method: 'DELETE', body });
          }
        },
        storage: {
          type: 'self',

          onSave: async ({ project, editor }) => {
            const files = await editor.runCommand('studio:projectFiles', { styles: 'inline' })
            // For simplicity, we'll "publish" only the first page.
            const firstPage = files.find(file => file.mimeType === 'text/html');
            const websiteData = {
              lastPublished: new Date().toLocaleString(),
              html: firstPage.content,
            };
            console.log(firstPage.content)
            localStorage.setItem("iii",firstPage.content)
          },

          onLoad: async () => {
            
            
          },
          autosaveChanges: 100,
          autosaveIntervalMs: 10000
        }
      }}
    />

  </div>
}


