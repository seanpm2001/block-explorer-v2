import { useEffect } from 'react';

import { httplink } from '../../client';

import { useNetworkInformationQuery } from './__generated__/operations';
import { getQueryProviderUrl } from './utils/queryProviderUrl';
import { getProviderUrl, setNetworkVersion, setProviderUrl } from './utils/storage';

const versions: { [key: string]: string } = {
  '14': '/beta-2/',
  '15': '/beta-2/',
  '17': '/beta-3/',
};
const { location } = window;

export function NetworkProvider({ children }: { children: React.ReactNode }) {
  const { loading } = useNetworkInformationQuery({
    onCompleted: (data) => {
      const nodeVersion = data.nodeInfo.nodeVersion;
      const [, version] = nodeVersion.split('.');
      setNetworkVersion(nodeVersion);
      const compatibleVersion = Object.keys(versions).find((k) => Number(k) >= Number(version));
      if (compatibleVersion) {
        if (!window.location.pathname.startsWith(versions[compatibleVersion])) {
          window.location.href =
            window.location.origin + versions[compatibleVersion] + location.hash;
        }
      }
    },
    onError: (error) => {
      // eslint-disable-next-line no-console
      console.error(error);
    },
  });

  useEffect(() => {
    // If providerUrl is present remove from url and redirect to clean url
    const queryProviderUrl = getQueryProviderUrl();
    if (queryProviderUrl) {
      setProviderUrl(queryProviderUrl);
      location.href = location.href.replace(location.search, '');
    }
    httplink.options.uri = getProviderUrl() || httplink.options.uri;
  }, []);

  if (loading) {
    return null;
  }

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
}